import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-100">Adam Locke</span>
            <span className="block text-sm text-zinc-400 truncate">adam@email.com</span>
          </div>

          <CircleCheck className="size-5 text-lime-300" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-100">Jimmy Neutron</span>
            <span className="block text-sm text-zinc-400 truncate">jimmy@email.com</span>
          </div>

          <CircleDashed className="size-5 text-zinc-400" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Cadastrar convidados
      </Button>
    </div>
  );
}
