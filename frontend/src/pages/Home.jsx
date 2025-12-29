import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

export default function PublicHomePage({ profList }) {

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-green-300 border-b">
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl font-bold leading-tight mb-4">Green Chemistry Research Group</h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Advancing Science through open research, high-impact publication, and collaborative innovation.
                        </p>
                    </div>

                    <Card className="rounded-2xl shadow-xl">
                        <CardContent className="p-6 space-y-3">
                            <h2 className="text-xl text-gray-500">Research Focus</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Test</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{icon:BookOpen, label:"Publications", value:"128"}, {icon:Users, label:"Members", value:"24"}, {icon:FlaskConical, label:"Projects", value:"18"}].map((s, i) => (
                    <Card key={i} className="rounded-2xl shadow">
                        <CardContent className="p-6 text-center space-y-2">
                            <s.icon className="mx-auto" />
                            <p className="text-2xl font-bold">{s.value}</p>
                            <p className="text-sm text-gray-500">{s.label}</p>
                        </CardContent>
                    </Card>
                ))}
            </section>

            <section className="bg-white border-t">
                <div className="max-w-7xl mx-auto px-6 py-14">
                    <h2 className="text-2xl font-bold mb-6">Latest Publication</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((p) => (
                            <Card key={p} className="rounded-2xl shadow hover:shadow-lg transition">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lg mb-1">Deep Learning for High-Entropy Alloy</h3>
                                    <p className="text-sm text-gray-600 mb-2">
                                        J. Doe, M. Smith, Nature Material, 2024.
                                    </p>
                                    <Button variant="link" className="px-0">Read More</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-14">
                <h2 className="text-2xl font-bold mb-6">Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {profList.map((member, i) => (
                        <Card key={i} className="rounded-2xl shadow text-center">
                            <CardContent className="p-6">
                                <img src="https://via.placeholder.com/120" className="mx-auto rounded-full mb-3" />
                                <p className="font-semibold">{member.position} {member.name}</p>
                                <p className="text-sm text-gray-500">{member.division}</p>
                                <Button className="m-4 p-4 bg-green-700"><Link to={member.name.split(" ")[0].toLowerCase()}>View More</Link></Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <footer className="bg-green-600 text-white">
                <div className="max-w-7xl mx-auto px-6 py-10 text-center space-y-4">
                    <p className="text-lg font-semibold">Department of Chemistry, Faculty of Science, Chulalongkorn University</p>
                    <p className="text-sm">© 2025 Green Chemistry Research Group</p>
                </div>
            </footer>
        </div>
    );
}