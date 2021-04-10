<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CasesHistory extends Model
{
    protected $table = "cases_history";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'information', 'status', 'case_id'
    ];

    public function cases()
    {
        return $this->belongsTo(Cases::class);
    }
}
