import { Building, Car, Shield, Zap } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { LoanView } from "../LoanView";
import { LoanItem } from "@/model/LoanItem";
import { useEffect, useState } from "react";

{
  /* Empréstimos Section */
}
export default function LoanSection() {
  const [loans, setLoans] = useState<LoanItem[]>([]);

  useEffect(() => {
    fetch("/loan.json")
      .then((res) => res.json())
      .then((data: LoanItem[]) => {
        const list: LoanItem[] = JSON.parse(JSON.stringify(data));
        setLoans(list);
      })
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  return (
    <section id="emprestimos" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nossas Soluções de Crédito
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre o empréstimo ideal para suas necessidades com condições que
            cabem no seu bolso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {loans.map((loan, index) => (
            <LoanView key={index} item={loan} />
          ))}
        </div>
      </div>
    </section>
  );
}
