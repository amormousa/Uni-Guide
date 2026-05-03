import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  NgZone,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Clock,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderer
} from 'three';
import { vertexShader, fragmentShader } from './shaders';

const MAX_GRADIENT_STOPS = 8;

function hexToVec3(hex: string): Vector3 {
  let value = hex.trim();
  if (value.startsWith('#')) value = value.slice(1);
  let r = 255, g = 255, b = 255;
  if (value.length === 3) {
    r = parseInt(value[0] + value[0], 16);
    g = parseInt(value[1] + value[1], 16);
    b = parseInt(value[2] + value[2], 16);
  } else if (value.length === 6) {
    r = parseInt(value.slice(0, 2), 16);
    g = parseInt(value.slice(2, 4), 16);
    b = parseInt(value.slice(4, 6), 16);
  }
  return new Vector3(r / 255, g / 255, b / 255);
}

@Component({
  selector: 'app-floating-lines',
  standalone: true,
  imports: [CommonModule],
  template: `<div #container class="floating-lines-container" [style.mixBlendMode]="mixBlendMode"></div>`,
  styles: [`
    .floating-lines-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: block;
    }
  `]
})
export class FloatingLinesComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @ViewChild('container', { static: true }) containerRef!: ElementRef<HTMLDivElement>;

  @Input() linesGradient?: string[];
  @Input() enabledWaves: string[] = ['top', 'middle', 'bottom'];
  @Input() lineCount: number | number[] = 6;
  @Input() lineDistance: number | number[] = 5;
  @Input() topWavePosition?: { x?: number, y?: number, rotate?: number };
  @Input() middleWavePosition?: { x?: number, y?: number, rotate?: number };
  @Input() bottomWavePosition: { x?: number, y?: number, rotate?: number } = { x: 2.0, y: -0.7, rotate: -1 };
  @Input() animationSpeed: number = 1;
  @Input() interactive: boolean = true;
  @Input() bendRadius: number = 5.0;
  @Input() bendStrength: number = -0.5;
  @Input() mouseDamping: number = 0.05;
  @Input() parallax: boolean = true;
  @Input() parallaxStrength: number = 0.2;
  @Input() mixBlendMode: string = 'screen';
  @Input() externalMouse?: { x: number, y: number };

  private renderer!: WebGLRenderer;
  private scene!: Scene;
  private camera!: OrthographicCamera;
  private material!: ShaderMaterial;
  private geometry!: PlaneGeometry;
  private uniforms: any;
  private clock = new Clock();
  private rafId: number = 0;
  private active = false;

  private targetMouse = new Vector2(-1000, -1000);
  private currentMouse = new Vector2(-1000, -1000);
  private targetInfluence = 0;
  private currentInfluence = 0;
  private targetParallax = new Vector2(0, 0);
  private currentParallax = new Vector2(0, 0);

  private resizeObserver?: ResizeObserver;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initThree();
    this.active = true;
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.material && this.uniforms) {
      this.updateUniforms();
    }
    if (changes['externalMouse'] && this.externalMouse) {
      this.handleExternalMouseMove(this.externalMouse.x, this.externalMouse.y);
    }
  }

  ngOnDestroy() {
    this.active = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.resizeObserver) this.resizeObserver.disconnect();
    this.disposeThree();
  }

  private getWaveLineCount(waveType: string): number {
    if (typeof this.lineCount === 'number') return this.lineCount;
    if (!this.enabledWaves.includes(waveType)) return 0;
    const index = this.enabledWaves.indexOf(waveType);
    return this.lineCount[index] ?? 6;
  }

  private getWaveLineDistance(waveType: string): number {
    if (typeof this.lineDistance === 'number') return this.lineDistance;
    if (!this.enabledWaves.includes(waveType)) return 0.1;
    const index = this.enabledWaves.indexOf(waveType);
    return this.lineDistance[index] ?? 0.1;
  }

  private initThree() {
    const container = this.containerRef.nativeElement;
    this.scene = new Scene();
    this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.camera.position.z = 1;

    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0x000000, 0); // Transparent background
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    container.appendChild(this.renderer.domElement);

    this.uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new Vector3(1, 1, 1) },
      animationSpeed: { value: this.animationSpeed },
      enableTop: { value: this.enabledWaves.includes('top') },
      enableMiddle: { value: this.enabledWaves.includes('middle') },
      enableBottom: { value: this.enabledWaves.includes('bottom') },
      topLineCount: { value: this.getWaveLineCount('top') },
      middleLineCount: { value: this.getWaveLineCount('middle') },
      bottomLineCount: { value: this.getWaveLineCount('bottom') },
      topLineDistance: { value: this.getWaveLineDistance('top') * 0.01 },
      middleLineDistance: { value: this.getWaveLineDistance('middle') * 0.01 },
      bottomLineDistance: { value: this.getWaveLineDistance('bottom') * 0.01 },
      topWavePosition: { value: new Vector3(this.topWavePosition?.x ?? 10.0, this.topWavePosition?.y ?? 0.5, this.topWavePosition?.rotate ?? -0.4) },
      middleWavePosition: { value: new Vector3(this.middleWavePosition?.x ?? 5.0, this.middleWavePosition?.y ?? 0.0, this.middleWavePosition?.rotate ?? 0.2) },
      bottomWavePosition: { value: new Vector3(this.bottomWavePosition?.x ?? 2.0, this.bottomWavePosition?.y ?? -0.7, this.bottomWavePosition?.rotate ?? 0.4) },
      iMouse: { value: new Vector2(-1000, -1000) },
      interactive: { value: this.interactive },
      bendRadius: { value: this.bendRadius },
      bendStrength: { value: this.bendStrength },
      bendInfluence: { value: 0 },
      parallax: { value: this.parallax },
      parallaxStrength: { value: this.parallaxStrength },
      parallaxOffset: { value: new Vector2(0, 0) },
      lineGradient: { value: Array.from({ length: MAX_GRADIENT_STOPS }, () => new Vector3(1, 1, 1)) },
      lineGradientCount: { value: 0 }
    };

    this.applyGradient();

    this.material = new ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader
    });

    this.geometry = new PlaneGeometry(2, 2);
    const mesh = new Mesh(this.geometry, this.material);
    this.scene.add(mesh);
    this.setSize();

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        if (!this.active) return;
        this.setSize();
      });
      this.resizeObserver.observe(container);
    }

    if (this.interactive) {
      this.renderer.domElement.addEventListener('pointermove', this.handlePointerMove.bind(this));
      this.renderer.domElement.addEventListener('pointerleave', this.handlePointerLeave.bind(this));
    }
  }

  private applyGradient() {
    if (this.linesGradient && this.linesGradient.length > 0) {
      const stops = this.linesGradient.slice(0, MAX_GRADIENT_STOPS);
      this.uniforms.lineGradientCount.value = stops.length;
      stops.forEach((hex, i) => {
        const color = hexToVec3(hex);
        this.uniforms.lineGradient.value[i].set(color.x, color.y, color.z);
      });
    }
  }

  private updateUniforms() {
    this.uniforms.animationSpeed.value = this.animationSpeed;
    this.uniforms.enableTop.value = this.enabledWaves.includes('top');
    this.uniforms.enableMiddle.value = this.enabledWaves.includes('middle');
    this.uniforms.enableBottom.value = this.enabledWaves.includes('bottom');
    this.uniforms.topLineCount.value = this.getWaveLineCount('top');
    this.uniforms.middleLineCount.value = this.getWaveLineCount('middle');
    this.uniforms.bottomLineCount.value = this.getWaveLineCount('bottom');
    this.uniforms.topLineDistance.value = this.getWaveLineDistance('top') * 0.01;
    this.uniforms.middleLineDistance.value = this.getWaveLineDistance('middle') * 0.01;
    this.uniforms.bottomLineDistance.value = this.getWaveLineDistance('bottom') * 0.01;
    this.uniforms.topWavePosition.value.set(this.topWavePosition?.x ?? 10.0, this.topWavePosition?.y ?? 0.5, this.topWavePosition?.rotate ?? -0.4);
    this.uniforms.middleWavePosition.value.set(this.middleWavePosition?.x ?? 5.0, this.middleWavePosition?.y ?? 0.0, this.middleWavePosition?.rotate ?? 0.2);
    this.uniforms.bottomWavePosition.value.set(this.bottomWavePosition?.x ?? 2.0, this.bottomWavePosition?.y ?? -0.7, this.bottomWavePosition?.rotate ?? 0.4);
    this.uniforms.interactive.value = this.interactive;
    this.uniforms.bendRadius.value = this.bendRadius;
    this.uniforms.bendStrength.value = this.bendStrength;
    this.uniforms.parallax.value = this.parallax;
    this.uniforms.parallaxStrength.value = this.parallaxStrength;
    this.applyGradient();
  }

  private setSize() {
    if (!this.active) return;
    const container = this.containerRef.nativeElement;
    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;
    this.renderer.setSize(width, height, false);
    const canvasWidth = this.renderer.domElement.width;
    const canvasHeight = this.renderer.domElement.height;
    this.uniforms.iResolution.value.set(canvasWidth, canvasHeight, 1);
  }

  private handleExternalMouseMove(x: number, y: number) {
    if (!this.active) return;
    const rect = this.renderer.domElement.getBoundingClientRect();
    const dpr = this.renderer.getPixelRatio();

    this.targetMouse.set(x * dpr, (rect.height - y) * dpr);
    this.targetInfluence = 1.0;

    if (this.parallax) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const offsetX = (x - centerX) / rect.width;
      const offsetY = -(y - centerY) / rect.height;
      this.targetParallax.set(offsetX * this.parallaxStrength, offsetY * this.parallaxStrength);
    }
  }

  private handlePointerMove(event: PointerEvent) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const dpr = this.renderer.getPixelRatio();
    this.targetMouse.set(x * dpr, (rect.height - y) * dpr);
    this.targetInfluence = 1.0;
    if (this.parallax) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const offsetX = (x - centerX) / rect.width;
      const offsetY = -(y - centerY) / rect.height;
      this.targetParallax.set(offsetX * this.parallaxStrength, offsetY * this.parallaxStrength);
    }
  }

  private handlePointerLeave() { this.targetInfluence = 0.0; }

  private animate() {
    if (!this.active) return;
    this.uniforms.iTime.value = this.clock.getElapsedTime();
    if (this.interactive) {
      this.currentMouse.lerp(this.targetMouse, this.mouseDamping);
      this.uniforms.iMouse.value.copy(this.currentMouse);
      this.currentInfluence += (this.targetInfluence - this.currentInfluence) * this.mouseDamping;
      this.uniforms.bendInfluence.value = this.currentInfluence;
    }
    if (this.parallax) {
      this.currentParallax.lerp(this.targetParallax, this.mouseDamping);
      this.uniforms.parallaxOffset.value.copy(this.currentParallax);
    }
    this.renderer.render(this.scene, this.camera);
    this.rafId = requestAnimationFrame(this.animate.bind(this));
  }

  private disposeThree() {
    if (this.geometry) this.geometry.dispose();
    if (this.material) this.material.dispose();
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
      if (this.renderer.domElement.parentElement) {
        this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
      }
    }
  }
}
