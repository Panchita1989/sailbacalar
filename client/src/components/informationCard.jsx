import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useCollapse} from 'react-collapsed'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function InformationCard({title, children}){

 const{
     getCollapseProps: getCollapseInformation, 
     getToggleProps: getToggleInfromation, 
     isExpanded: isInformationExpanded
 } = useCollapse()
    
    return(
        <section className='border-b border-neutral-300 pb-3'>
            <div className='flex justify-between my-3 items-center'>
                <h3 className='text-xl'>{title}</h3>
                {isInformationExpanded ? (
                    <FontAwesomeIcon className='text-xl outline-none focus:outline-none' icon={faChevronUp}  {...getToggleInfromation()}/>
                ) : (
                    <FontAwesomeIcon className='text-xl outline-none focus:outline-none' icon={faChevronDown} {...getToggleInfromation()}/> 
                )}
            </div>
            <section className='mx-4' {...getCollapseInformation()}>
                {children}                    
            </section>
        </section>
    )
}