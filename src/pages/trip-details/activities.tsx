import { CircleCheck, CircleDashed } from "lucide-react";

export function Activities() {
  return (
    <ul className="space-y-8">
      <h2 className="sr-only">Activities by date</h2>

      <li className="space-y-2.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
          <span className="text-xs text-zinc-500">Sábado</span>
        </div>

        <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada</p>
      </li>

      <li className="space-y-2.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
          <span className="text-xs text-zinc-500">Domingo</span>
        </div>

        <ul className="space-y-2.5">
          <li className="list-none px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-100">Academia em grupo</span>
            <span className="text-zinc-400 text-sm ml-auto">00:00h</span>
          </li>

          <li className="list-none px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleDashed className="size-5 text-zinc-400" />
            <span className="text-zinc-100">Academia em grupo</span>
            <span className="text-zinc-400 text-sm ml-auto">00:00h</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}
