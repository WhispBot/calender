import "../../scss/components/_header.scss"
import { TbChevronDown, TbChevronUp } from "react-icons/tb"
import Button from "../button";

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
        <div className="header-wrapper bg-primary-600">
            <div>
                <span>{month}</span> <span>{year}</span>
            </div>
            <div className="btn-wrapper">
                <Button iconRight={<TbChevronUp />} onClick={() => onNext()} />
                <Button iconRight={<TbChevronDown />} onClick={() => onBack()} />
            </div>
        </div >
    )
}

export default Header