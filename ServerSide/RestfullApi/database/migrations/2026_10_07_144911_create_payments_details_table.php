<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId("payment_id")->constrained("payments")->cascadeOnDelete();
            $table->string("payment_method")->nullable();
            $table->decimal("amount",12,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments_details');
    }
};
