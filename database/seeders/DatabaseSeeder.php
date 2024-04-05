<?php

namespace Database\Seeders;

use App\Models\Rule;
use App\Models\Terminal;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $rules = [
            [
                'name' => 'Admin',
                'title' => 'Администратор',
            ],
            [
                'name' => 'Tehnology',
                'title' => 'Инженер-технолог',
            ],
            [
                'name' => 'operator',
                'title' => 'Оператор',
            ]
        ];

        foreach ($rules as $rule) {
            Rule::create([
                'name' => $rule['name'],
                'title' => $rule['title'],
            ]);
        }

        User::create([
            'name' => 'Николай',
            'last_name' => 'Сироткин',
            'login' => '4500',
            'password' => Hash::make('Komax1230'),
            'rule_id' => 1
        ]);

        $terminals = [
            [
                'code' => "7126882102",
                'number' => "7126-8821-02",
                'supplier' => "Yazaki",
                'title' => "TERMINAL 1W MINI-FUSE FEMALE"
            ],
            [
                'code' => "7126882602",
                'number' => "7126-8826-02",
                'supplier' => "Yazaki",
                'title' => "TERMINAL 1W MINI-FUSE FEMALE"
            ],
            [
                'code' => "7114573502",
                'number' => "368088-1",
                'supplier' => "TE",
                'title' => "TERMINAL 090 II Male 2.3"
            ],
            [
                'code' => "7116725202",
                'number' => "8240-0370",
                'supplier' => "Sumitomo",
                'title' => "Terminal 090 NS Female 2.3mm Unsealed"
            ],
            [
                'code' => "7116830302",
                'number' => "927772-3",
                'supplier' => "TE",
                'title' => "Terminal JPT Female 2.8mm Sealed"
            ],
            [
                'code' => "7114461902",
                'number' => "7114-4619-02",
                'supplier' => "Yazaki",
                'title' => "Terminal YESC Kaizen Male 0.64mm Sealed/Unsealed"
            ],
            [
                'code' => "7196029002",
                'number' => "8240-0552",
                'supplier' => "Sumitomo",
                'title' => "Terminal 025 Female 0.64mm Unsealed"
            ],
            [
                'code' => "7116823608",
                'number' => "2-929941-1",
                'supplier' => "TE",
                'title' => "Terminal JPT Female 2.8mm Sealed"
            ],
            [
                'code' => "7116775002",
                'number' => "49702-6902",
                'supplier' => "Molex",
                'title' => "MOLEX TAK50 WR TERM RCPT UNSEALED"
            ],
            [
                'code' => "7116695702",
                'number' => "211CC2S4160P",
                'supplier' => "FCI",
                'title' => "TERMINAL 1.5 SICMA 3+ FEMALE"
            ],
            [
                'code' => "7116695802",
                'number' => "211CC2S2160P",
                'supplier' => "FCI",
                'title' => "Terminal Sicma-3 Plus Female 1.5mm Unseal"
            ],
            [
                'code' => "7116997402",
                'number' => "0-0927831-2",
                'supplier' => "TE",
                'title' => "Terminal SPT Female 4.8mm Unsealed"
            ],
            [
                'code' => "7116571002",
                'number' => "0-1743654-1",
                'supplier' => "TE",
                'title' => "Terminal 090 Female 2.3mm Unsealed"
            ],
            [
                'code' => "7114437402",
                'number' => "12147300",
                'supplier' => "APTIV",
                'title' => "DUCON 1.5*0.8,  W/H/D: 1.5/ .8/ 30.0"
            ],
            [
                'code' => "7116825002",
                'number' => "12147302",
                'supplier' => "APTIV",
                'title' => "TERMINAL 1.5 FEMALE"
            ],
            [
                'code' => "7116119602",
                'number' => "12064971",
                'supplier' => "APTIV",
                'title' => "TERMINAL MP150 FEMALE"
            ],
            [
                'code' => "7116443102",
                'number' => "15317877",
                'supplier' => "APTIV",
                'title' => "Terminal SICMA Male 1.5mm Sealed (single"
            ],
            [
                'code' => "71161421",
                'number' => "7116-1421",
                'supplier' => "Yazaki",
                'title' => "Terminal 090 Female 2.3mm Sealed"
            ],
            [
                'code' => "7196052602",
                'number' => "505153-8000",
                'supplier' => "Molex",
                'title' => "Terminal unknown Female 2.0mm Unsealed"
            ],
            [
                'code' => "7116154602",
                'number' => "7116-1546-02",
                'supplier' => "Yazaki",
                'title' => "TERMINAL OBD-2 FEMALE"
            ],
            [
                'code' => "7114361608",
                'number' => "7114-3616-08",
                'supplier' => "Yazaki",
                'title' => "Terminal YAK Male 1.2mm Unsealed"
            ],
            [
                'code' => "7114533908",
                'number' => "6 010 06 34",
                'supplier' => "FCI",
                'title' => "DCS2 1.5MM TERMINAL MALE"
            ],
            [
                'code' => "7116461802",
                'number' => "7116-4618-02",
                'supplier' => "Yazaki",
                'title' => "Terminal YESC Kaizen Female 0.64mm Unsealed"
            ],
            [
                'code' => "7114461802",
                'number' => "7114-4618-02",
                'supplier' => "Yazaki",
                'title' => "Terminal YESC Kaizen Male 0.64mm Sealed/Unsealed"
            ],
            [
                'code' => "7196120602",
                'number' => "0-1802189-1",
                'supplier' => "TE",
                'title' => "TH 0.64MM TERMINAL FEMALE"
            ],
        ];

        foreach ($terminals as $terminal) {
            Terminal::create([
                'code' => $terminal['code'],
                'number' => $terminal['number'],
                'supplier' => $terminal['supplier'],
                'title' => $terminal['title'],
            ]);
        }
    }
}
