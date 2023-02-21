import { useParams } from "react-router-dom"

export const Race = () => {
  const {round} = useParams()

  return (
  <div>
    {round}
    </div>
    )
}