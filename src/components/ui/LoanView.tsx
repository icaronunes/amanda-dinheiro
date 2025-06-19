import { LoanItem } from "@/model/LoanItem";
import React from "react";
import { Card } from "./card";
import { Zap } from "lucide-react";
import { Button } from "./button";

type LoanListProps = {
  item: LoanItem;
};

export const LoanView: React.FC<LoanListProps> = ({ item }) => {
  return (
    <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <Zap className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
        {item.title}
      </h3>
      <p className="text-gray-600 text-center mb-4">
        {item.description}
      </p>
      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="font-semibold">Taxa de Juros:</span>
          <span className="text-green-600 font-bold">
            A partir de {item.juros} a.m.
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Prazo:</span>
          <span>{item.prazo}</span>
        </div>
      </div>
      <Button className="w-full bg-green-600 hover:bg-green-700">
        {item.link}
      </Button>
    </Card>
  );
};
