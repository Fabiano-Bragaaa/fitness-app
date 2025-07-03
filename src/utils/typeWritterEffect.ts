type Props = {
  text: string;
  onUpdate: (current: string) => void;
  onDone: () => void;
};

const CURSOR = "|";

export function typeWritterEffect({ onDone, onUpdate, text }: Props) {
  let i = 0;

  function type() {
    onUpdate(text.slice(0, i + 1) + CURSOR);
    i++;
    if (i < text.length) {
      setTimeout(type, 30);
    } else {
      setTimeout(onDone, 300);
    }
  }

  type();
}
