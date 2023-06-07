import './InfoMessage.scss';

type Props = {
  text: string;
}

export const InfoMessage: React.FC<Props> = ({ text = 'Sorry but today arent some trains' }) => {
  return (
    <div className="infoMessage">
       {text}
    </div>
  )
}