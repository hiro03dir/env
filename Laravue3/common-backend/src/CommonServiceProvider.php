<?php

namespace Packages\CommonBackend;

use Illuminate\Support\ServiceProvider;

class CommonServiceProvider extends ServiceProvider
{
  public function register()
  {
    $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
  }

  public function boot()
  {
    //
  }
}
