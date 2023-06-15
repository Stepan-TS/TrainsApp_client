import './Message.scss';

type Props = {
  text: string;
}

export const Message: React.FC<Props> = (props) => {
  const {
    text,
  } = props;

  return (
    <div className="form-field">
      <h2 className='error'>
        {text}
      </h2>
    </div>
  )
} 