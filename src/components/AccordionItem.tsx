import { FaMinus, FaPlus } from "react-icons/fa";

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className='md:max-w-[75dvw] w-auto p-4'>
      <div
        onClick={onClick}
        className={`md:text-3xl xl:text-4xl font-bold p-4 cursor-pointer bg-white border-white rounded-md text-[var(--ankerBlue)] transition-all duration-300 ease-in-out ${isOpen ? 'mb-2' : 'mb-4'}`}
      >
        <div className='flex items-center justify-between'>
          <span>{question}</span>
          {isOpen ? <FaMinus size={24} /> : <FaPlus size={24} />}
        </div>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
          <p className='text-md md:text-xl xl:text-2xl text-left'>
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
