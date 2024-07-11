import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  onOpenGuestsModal: () => void;
  onOpenConfirmTripModal: () => void;
  emailsToInvite: string[];
}

export function InviteGuestsStep({
  onOpenGuestsModal,
  onOpenConfirmTripModal,
  emailsToInvite,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="text-zinc-400 size-5" />
        <button
          onClick={onOpenGuestsModal}
          className="bg-transparent text-lg placeholder:zinc-400 outline-none flex-1 text-left"
        >
          {emailsToInvite.length
            ? `${emailsToInvite.length} pessoa(s) convidada(s)`
            : "Quem estará na viagem?"}
        </button>
      </div>

      <div className="h-6 w-px bg-zinc-800"></div>

      <button
        onClick={onOpenConfirmTripModal}
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
      >
        Confirmar viagem
        <ArrowRight className="size-5 text-lime-950" />
      </button>
    </div>
  );
}
