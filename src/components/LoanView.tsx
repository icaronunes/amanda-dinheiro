import { LoanItem } from "@/model/LoanItem";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import { colorMap } from "./colors";

type LoanListProps = {
  item: LoanItem;
};


export const LoanView: React.FC<LoanListProps> = ({ item }) => {
  const color = colorMap[item?.color] || colorMap.green;
  const [hover, setHover] = useState(false);

  return (
    <Card
      className={`p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br ${color.from} ${color.to}`}
    >
      <div 
        className={`w-16 h-16 bg-gradient-to-r  ${color.from2} ${color.to2} rounded-full flex items-center justify-center mx-auto mb-6`}
      >
        <Zap className="w-8 h-8 text-white" />
      </div>
      <h3 className={`text-2xl font-bold mb-4 text-center`} style={{ color: color.base, font: 'bold' }}>
        {item.title}
      </h3>
      <p className="text-gray-800 text-center mb-4">{item.description}</p>
      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="font-semibold">Taxa de Juros:</span>
          <span className={`text-${color.base}-500 font-bold`}>
            A partir de {item.juros} a.m.
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Prazo:</span>
          <span>{item.prazo}</span>
        </div>
      </div>
      <Button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: "100%",
          backgroundColor: hover ? "green" : "transparent",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          transition: "background-color 0.3s",
        }}
      >
        {item.link}
      </Button>
    </Card>
  );
};
