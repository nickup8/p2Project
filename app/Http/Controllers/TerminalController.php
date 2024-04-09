<?php

namespace App\Http\Controllers;

use App\Http\Resources\TerminalResource;
use App\Models\Terminal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TerminalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Terminal::query();
        $terminals = $query->paginate(10);
        return Inertia::render('Terminals/Terminals', [
            'terminals' => TerminalResource::collection($terminals),
            'queryParams' => request()->query()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Terminals/NewTerminal');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'code' => ['required', 'string', 'unique:terminals,code,except,id'],
            'number' => ['required', 'string'],
            'supplier' => ['required', 'string'],
            'title' => ['required', 'string'],
        ]);
        Terminal::create($data);

        return redirect(route('terminals.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Terminal $terminal)
    {
        return Inertia::render('Terminals/ShowTerminal', [
            'terminal' => new TerminalResource($terminal),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Terminal $terminal)
    {
        return Inertia::render('Terminals/EditTerminal', [
            'terminal' => new TerminalResource($terminal),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Terminal $terminal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Terminal $terminal)
    {
        //
    }
}
