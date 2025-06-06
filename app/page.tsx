import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline'">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura Brainy explorer"
          topic="Neural Network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="126"
          name="Eco Green Guardian"
          topic="Ecosystems and Biodiversity"
          subject="geography"
          duration={35}
          color="#b2e2b0"
        />

        <CompanionCard
          id="125"
          name="HistoriWise Wanderer"
          topic="Ancient Civilizations"
          subject="history"
          duration={50}
          color="#f9b4ab"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
