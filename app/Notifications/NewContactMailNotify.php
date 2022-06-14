<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewContactMailNotify extends Notification implements ShouldQueue
{
    use Queueable;

    public $maildata;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($maildata)
    {
        $this->maildata = $maildata;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $details = $this->maildata;
        return (new MailMessage)
            ->subject($details['title'])
            ->greeting('Konnichiwa!')
            ->line('I am ' . $details['name'] .' and my email is ' . $details['email'])
            ->line('My message: ' . $details['message']);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            // 'contact_id' => $this->maildata['title']
            //Return contact_id to be used in the database
            // 'contact_id' => $this->maildata['id'],
            // 'title' => $this->maildata['title'],
            // 'name' => $this->maildata['name'],
            // 'email' => $this->maildata['email'],
            // 'message' => $this->maildata['message'],
            // 'created_at' => $this->maildata['created_at'],
        ];
    }
}
