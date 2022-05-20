<?php

namespace App\Http\Controllers;

use App\Models\ProjectImage;
use App\Models\TemporaryFile;
use Illuminate\Http\Request;

class ProjectImageController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if($request->hasFile('projectImage')){
            $file = $request->file('projectImage');
            $filename = $file->getClientOriginalName();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/images/tmp/' . $folder, $filename);

            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);


            return response()->json($folder);
            // return $folder;
        }

        return '';
    }


}
