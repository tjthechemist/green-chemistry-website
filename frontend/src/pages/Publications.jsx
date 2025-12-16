import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfessorPublicationPage({ name }) {
    const [profName] = useState(name);

    const publications = [];

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-green-300 border-b">
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <h1 className="text-3xl font-bold">{profName}</h1>
                    <p className="text-gray-600 mt-1">Scopus-indexed Publications</p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 gap-4">
                    {publications.map((p) => (
                        <Card key={p.id} className="rounded-2xl shadow hover:shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold flex items-center gap-2">{p.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{p.journal}, {p.year}</p>
                                <p className="text-sm text-gray-500 mt-1">Citation: {p.citation}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}