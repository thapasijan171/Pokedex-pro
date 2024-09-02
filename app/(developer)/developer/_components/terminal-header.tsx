import { ActionTooltip } from '@/app/(home)/_components/ActionTooltip';
import { Undo2 } from 'lucide-react';
import Link from 'next/link';

const TerminalHeader = () => {
  return (
    <div>
      <div className="bg-gray-800 flex py-2 px-4 rounded-md">
        <div className="flex gap-2 items-center">
          <Link href={'/'} className="size-3 bg-rose-500 rounded-full"></Link>
          <div className="size-3 bg-yellow-500 rounded-full"></div>
          <div className="size-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center">Sijan Lamichhane Magar | Portfolio</div>
        <ActionTooltip label="normal mode" side="top" link="/">
          <Undo2 />
        </ActionTooltip>
      </div>
    </div>
  );
};
export default TerminalHeader;
