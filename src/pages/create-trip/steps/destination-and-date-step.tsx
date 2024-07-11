import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  onCloseGuestsInput: () => void;
  onOpenGuestsInput: () => void;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  onCloseGuestsInput,
  onOpenGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="text-zinc-400 size-5" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          name="destination"
          placeholder="Para onde vocẽ vai?"
          className="bg-transparent text-lg placeholder:zinc-400 outline-none flex-1"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="text-zinc-400 size-5" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          name="starts-at"
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder:zinc-400 w-40 outline-none"
        />
      </div>

      <div className="h-6 w-px bg-zinc-800"></div>

      {isGuestsInputOpen ? (
        <Button onClick={onCloseGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5 text-zinc-200" />
        </Button>
      ) : (
        <Button onClick={onOpenGuestsInput}>
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </Button>
      )}
    </div>
  );
}
