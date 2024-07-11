import { FormEvent, useState } from "react";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function handleAddGuest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("guest-email")?.toString();

    if (email) {
      if (emailsToInvite.includes(email)) {
        alert("E-mail already included.");
        return;
      }

      setEmailsToInvite((current) => [...current, email]);
      e.currentTarget.reset();
    }
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function handleConfirmTrip(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // const data = new FormData(e.currentTarget);
    // const email = data.get("owner-email")?.toString();
    // const name = data.get("owner-name")?.toString();
    e.currentTarget.reset();
  }

  function removeEmailFromInvites(email: string) {
    setEmailsToInvite((emails) => emails.filter((e) => e != email));
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Plann.er logo" width={172} height={44} />

          <p className="text-center text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            onOpenGuestsInput={openGuestsInput}
            onCloseGuestsInput={closeGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              onOpenGuestsModal={openGuestsModal}
              onOpenConfirmTripModal={openConfirmTripModal}
              emailsToInvite={emailsToInvite}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          onClose={closeGuestsModal}
          onRemoveGuest={removeEmailFromInvites}
          onSubmit={handleAddGuest}
          emails={emailsToInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal onClose={closeConfirmTripModal} onSubmit={handleConfirmTrip} />
      )}
    </div>
  );
}
