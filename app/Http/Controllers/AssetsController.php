<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Asset;

class AssetsController extends Controller
{
    //
    public function insertAssets(Request $request)
    {
        $userId = Auth::id();

        $assetIns = new Asset;
        $assets = $assetIns->insertAssets($request->type, $request->assets, $userId);

        return response($assets);
    }
}
