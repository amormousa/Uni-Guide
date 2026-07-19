import 'reflect-metadata';
import * as XLSX from 'xlsx';
import * as path from 'path';
import { DataSource } from 'typeorm';

import { University } from '../modules/colleges/entities/university.entity';
import { College } from '../modules/colleges/entities/college.entity';
import { Specialization } from '../modules/colleges/entities/specialization.entity';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1111',
    database: 'futurepath_db',
    entities: [University, College, Specialization],
    synchronize: true,
});

async function main() {
    await AppDataSource.initialize();

    const universityRepo = AppDataSource.getRepository(University);
    const collegeRepo = AppDataSource.getRepository(College);
    const specializationRepo = AppDataSource.getRepository(Specialization);

    const filePath = path.join(process.cwd(), 'UNI GUIDE.xlsx');

    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json<any>(worksheet);

    console.log(`📄 Found ${data.length} rows`);

    for (const row of data) {
        const universityName = row['University'];
        const facultyName = row['Faculty'];
        const majors = row['Major'];

        if (!universityName || !facultyName) continue;

        // ================= UNIVERSITY =================
        let university = await universityRepo.findOne({
            where: { name: universityName },
        });

        if (!university) {
            university = universityRepo.create();
        }

        university.name = universityName;
        university.description = row['Description'] || '';
        university.location = row['Maps Link'] || '';
        university.mapsLink = row['Maps Link'] || '';
        university.logo = row['Image'] || '';
        university.website = row['Website'] || '';
        university.type = row['Type'] || '';
        university.applyLink = row['Apply Link'] || row['Website'] || '';

        await universityRepo.save(university);

        console.log(`🏛 ${universityName}`);

        // ================= COLLEGE =================
        let college = await collegeRepo.findOne({
            where: {
                name: facultyName,
                universityId: university.id,
            },
        });

        if (!college) {
            college = await collegeRepo.save({
                name: facultyName,
                description: '',
                type: '',
                annualFee: Number(String(row['Annual Fee']).replace(/,/g, '')) || 0,
                universityId: university.id,
            });

            console.log(`🏫 Added College: ${facultyName}`);
        }

        // ================= SPECIALIZATIONS =================
        if (majors) {
            const majorList = String(majors)
                .split('\\n')
                .map((m) => m.trim())
                .filter(Boolean);

            for (const major of majorList) {
                const exists = await specializationRepo.findOne({
                    where: {
                        name: major,
                        college_id: college.id,
                    },
                });

                if (!exists) {
                    await specializationRepo.save({
                        name: major,
                        college_id: college.id,
                    });

                    console.log(`🎓 Added Major: ${major}`);
                }
            }
        }
    }

    console.log('🎉 Import Completed');
    await AppDataSource.destroy();
}

main().catch(console.error);