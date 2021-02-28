<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
use Illuminate\Database\Eloquent\MassAssignmentException;

class ContactsController extends Controller
{
    public function getContact($id)
    {
        $contact = Contact::where('id', $id)->get();

        return response()->json([
            'success' => true,
            'message' => 'Contacto encontrado',
            'data' => $contact,
        ], 200);
    }

    public function post(Request $request){
        $content = $request->all();

        $contact = new Contact();
        $contact->type = $content['type'];
        $contact->rfc = $content['rfc'];
        $contact->type_person = $content['type_person'];
        $contact->emails = $content['emails'];
        $contact->moviles = $content['moviles'];
        $contact->phones = $content['phones'];
        $contact->address_id = $content['address_id'];

        $contact->save();
        
        return $contact;
    }

    public function put(Request $request, $id){
        $contact = Contact::find($id);
        $content = $request->all();

        $contact->type = $content['type'];
        $contact->rfc = $content['rfc'];
        $contact->type_person = $content['type_person'];
        $contact->emails = $content['emails'];
        $contact->moviles = $content['moviles'];
        $contact->phones = $content['phones'];
        $contact->address_id = $content['address_id'];

        $contact->save();
        
        return $contact;
    }
}