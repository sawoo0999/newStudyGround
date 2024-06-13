import { CORE_CONCEPTS } from "../../data";
import Section from "../Section";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((el) => (
          <CoreConcept key={el.title} {...el} />
        ))}
      </ul>
    </Section>
  );
}
