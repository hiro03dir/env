<?php

namespace Packages\CommonBackend\Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Packages\CommonBackend\Models\User;

class MasterDatabaseSeeder extends Seeder
{

    public function run()
    {
        // ユーザー作成
        $manager = User::create([
            'name' => '社長',
            'email' => 'president@sample.com',
            'password' => bcrypt('password'),
        ]);

        $employee = User::create([
            'name' => '社員1',
            'email' => 'gest@sample.com',
            'password' => bcrypt('password'),
        ]);


        // ロール作成
        $adminRole = Role::create(['name' => 'admin']);
        $memberRole = Role::create(['name' => 'member']);

        // 権限作成
        $adminPermission = Permission::create(['name' => 'admin']);
        $memberPermission = Permission::create(['name' => 'member']);


        // roleに複数の権限を付与
        $adminRole->syncPermissions($adminPermission, $memberPermission);
        $memberRole->syncPermissions($memberPermission);

        // 社長にadminを割り当て
        $manager->assignRole($adminRole);
        $employee->assignRole($memberRole);
    }
}
