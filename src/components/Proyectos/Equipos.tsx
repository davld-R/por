import ReactIcon from '../Icons/ReactIcon';
import Css5Icon from '../Icons/Css5Icon';
import NodeIcon from '../Icons/NodeIcon';

export default function Equipos() {
  return (
    <ul className="flex gap-4 max-sm:flex-wrap">
      <li className="flex border border-slate-50 rounded-2xl py-1 px-2 items-center gap-2 bg-black text-slate-50">
        <span>
          <ReactIcon width="20px" height="20px" />
        </span>
        React
      </li>
      <li className="flex border border-slate-50 rounded-2xl py-1 px-2 items-center gap-2 bg-black text-slate-50">
        <span>
          <Css5Icon width="20px" height="20px" />
        </span>
        CSS
      </li>
      <li className="flex border border-slate-50 rounded-2xl py-1 px-2 items-center gap-2 bg-black text-slate-50">
        <span>
          <NodeIcon width="20px" height="20px" />
        </span>
        Node JS
      </li>
    </ul>
  );
}
