import React from 'react';

function App() {
  return (
    <div className="max-w-2xl h-screen bg-slate-50 mx-auto px-6 py-8 text-slate-600">
      <header className="text-4xl font-bold my-8 text-center text-slate-700">
        Phone Book App
      </header>
      <main>
        <section className="flex justify-between py-4">
          <h3 className="font-bold text-xl">Contacts</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded font-bold text-sm">Add Contact</button>
        </section>
        <section className="search">
          <input className="px-4 py-2 placeholder:text-slate-400 border border-slate-300 rounded w-full" placeholder="Search" />
        </section>
      </main>
    </div>
  );
}

export default App;
