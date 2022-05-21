<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectImage;
use App\Models\TemporaryFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::with('images')->orderBy('created_at', 'DESC')->get();

        $data = [
            'hello',
        ];

        // $data = Contact::orderByDesc('created_at')->get();
        return Inertia::render('Admin/Projects', [
            'data' => $data,
            'projects' => $projects,
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // dd($request->all());
        // Validator::make($request->all(), [
        //     'title' => ['required', 'max:50'],
        //     // 'email' => ['required', 'max:50', 'email'],
        //     // 'message' => ['required', 'max:200'],
        // ])->validate();


        $project = Project::create([
            'title' => $request->title,
            'demo' => $request->demo,
            'source' => $request->source,
            'description' => $request->description,

        ]);
        //Store each images to Spatie Collection
        for ($i = 0; $i < count($request->images); $i++) {


            $folder = $request->images[$i];

            $temporaryFile = TemporaryFile::where('folder', $folder)->first();


            if ($temporaryFile) {
                //Spatie
                $updatedFile= $project->addMedia(storage_path('app/public/images/tmp/' . $folder . '/' . $temporaryFile->filename))->toMediaCollection('projectImages');
                $path = $updatedFile->getUrl();

                //Traditional Laravel Way
                // $currentFile = storage_path('app/public/images/tmp/' . $folder . '/' . $temporaryFile->filename);

                //Store to Public Dir
                // $path = Storage::putFileAs(
                //     'public/images/projects',
                //     $currentFile,
                //     $temporaryFile->filename
                // );

                //change path for public Access
                // $path = Str::replace('public', 'storage', $path);

                //remove Temporary Files
                Storage::deleteDirectory('/public/images/tmp/' . $folder);

                $temporaryFile->delete();

                //Store to Image Table
                ProjectImage::create([
                    'image' => $path,
                    'project_id' => $project->id,
                ]);
            }
        }

        return back(303)->with('message', 'Saved Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }
}
