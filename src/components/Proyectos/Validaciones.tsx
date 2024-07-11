import HtmlIco from '../Icons/Html5Icon';
import Css5Icon from '../Icons/Css5Icon';
import JavaScriptIcon from '../Icons/JavaScriptIcon';

export default function Validaciones() {
  return (
    <ul className="flex gap-4 max-sm:flex-wrap">
      <li className="flex border border-slate-50 rounded-2xl py-1 px-2 items-center gap-2 bg-black text-slate-50">
        <span>
          <HtmlIco width="20px" height="20px" />
        </span>
        HTML5
      </li>
      <li className="flex border border-slate-50 rounded-2xl py-1 px-2 items-center gap-2 bg-black text-slate-50">
        <span>
          <Css5Icon width="20px" height="20px" />
        </span>
        CSS
      </li>
      <li className="flex border border-slate-50 rounded-2xl py-1 px-2 items-center gap-2 bg-black text-slate-50">
        <span>
          <JavaScriptIcon width="20px" height="20px" />
        </span>
        JavaScript
      </li>
    </ul>
  );
}
