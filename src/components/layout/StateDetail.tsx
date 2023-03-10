import styled from "@emotion/styled";
import { Box } from "rebass";

const Section = styled.section`
    padding-left: 5%;
    padding-right: 5%;
`;

const Span = styled.span`
    font-size: 1.2em;
    padding-right:3%;
`;
interface DataType{
    name: string|"",
    count: number|0
}
interface  PropTypes{
    name: string|'',
    data: DataType[]
}
// @ts-ignore
export default function StateDetail(props: PropTypes){

    return (
        <Section>
            <h1>
                {props.name}
            </h1>
            <Box width={5/5} display={'flex'}>
                <Box width={1/5}>
                    <Span>
                        {props.name}
                    </Span>
                </Box>
                <Box textAlign={'left'} width={4/5}>
                    <Box>
                        {props.data.map((d)=>{
                            return (
                                <div key={props.name+'-'+d.name}>
                                    <Span >
                                        Name: {d.name} 
                                    </Span> 
                                    <Span >
                                        Count: {d.count} 
                                    </Span>
                                </div>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
            <Box width={1/1} textAlign={"right"}>
                <Span >
                    number of {props.name}: { props.data.length} 
                </Span>
            </Box>
            <br />

        </Section>
    )
} 