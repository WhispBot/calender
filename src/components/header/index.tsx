import "./index.scss"
import { BsChevronUp, BsChevronDown } from "react-icons/bs"

interface props {
    changeMonth: Function;
    value: number;
    month: string;
    year: string;
}

const Header: React.FC<props> = ({ changeMonth, value, month, year }) => {

    const onNext = () => {
        changeMonth(value - 1)
    }

    const onBack = () => {
        changeMonth(value + 1)
    }

    return (
        <div className="header-wrapper">
            <div>
                <span>{month}</span> <span>{year}</span>
            </div>
            <div className="btn-wrapper">
                <button className="header-btn" onClick={() => onNext()}><BsChevronUp /></button>
                <button className="header-btn" onClick={() => onBack()}><BsChevronDown /></button>
            </div>
        </div>
    )
}

export default Header