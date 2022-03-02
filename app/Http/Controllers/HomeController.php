<?php

namespace App\Http\Controllers;

use App\Mail\EmailContact;
use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Facades\Notification;
use App\Notifications\NewContactMailNotify;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('index', [
            // 'canLogin' => Route::has('login'),
            // 'canRegister' => Route::has('register'),
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

        Validator::make($request->all(), [
            'name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
            'message' => ['required', 'max:200'],
        ])->validate();

        //Save To Database
        $contact = new Contact($request->all());
        $contact->save();

        //Send by Mail
        $admin = User::first();
        $mailData = [
            'title' => 'Contact Message!',
            'name' => $request['name'],
            'email' => $request['email'],
            'message' => $request['message'],
        ];
        Notification::send($admin, new NewContactMailNotify($mailData));


        // Mail::to($admin->email)->send(new EmailContact($mailData));

        return back(303);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function sitemap()
    {
        $data = null;

        return response()->view('sitemap', compact('data'))
            ->header('Content-Type', 'text/xml');
    }
}
