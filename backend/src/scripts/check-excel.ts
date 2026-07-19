import * as XLSX from 'xlsx';
import * as path from 'path';

function check() {
    const filePath = path.join(process.cwd(), 'UNI GUIDE.xlsx');
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json<any>(worksheet);

    console.log(`📄 Total Rows: ${data.length}`);
    const uniMap = new Map<string, Set<string>>();

    for (const row of data) {
        const uni = row['University'];
        const link = row['Maps Link'];
        if (uni) {
            if (!uniMap.has(uni)) {
                uniMap.set(uni, new Set());
            }
            if (link) {
                uniMap.get(uni)?.add(link);
            }
        }
    }

    for (const [uni, links] of uniMap.entries()) {
        console.log(`🏛 ${uni}:`);
        if (links.size === 0) {
            console.log(`  ❌ No links found`);
        } else {
            for (const link of links) {
                console.log(`  🔗 ${link}`);
            }
        }
    }
}

check();
