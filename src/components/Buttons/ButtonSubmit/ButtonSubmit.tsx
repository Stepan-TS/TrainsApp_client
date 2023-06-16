import './ButtonSubmit.scss';

type Props = {
  onSubmit?: (event: React.FormEvent) => void;
  onSendData?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  text: string;
}

export const ButtonSubmit: React.FC<Props> = (props) => {
  const {
    onSubmit,
    onSendData,
    text,
  } = props;

  const onClick = onSubmit || onSendData;
  return (
    <div className="btn-submit">
      <button 
        type="submit"
        className='btn-submit_search'
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}