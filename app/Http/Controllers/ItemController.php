<?php

namespace App\Http\Controllers;

use App\Item;
use Inertia\Inertia;

class ItemController
{
    public function add()
    {
        $item = new Item();
        $item->name = 'testItem';
        $item->save();

        return redirect(route('homepage'));
    }

    public function page()
    {
//        print_r(Item::all());

        return Inertia::render('SimplePage/Show', [
            'items' => Item::all()
        ]);
    }
}
