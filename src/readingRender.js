
import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';



//Profile object with accordian stuffs

class ReadingRender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userObj: {},
        };

}


renderMe = (herstory) => {
            herstory.reduce((acc, curr)=>{
               
              return  () => (
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <div className="r-h-c">
                                    <div className="card-box">
                                        <img src={herstory.cardSet[0]} alt={herstory.cardSet[0].name} key={`${herstory.cardSet[0].name} - reh`} />
                                        <img src={herstory.cardSet[1]} alt={herstory.cardSet[1].name} key={`${herstory.cardSet[1].name} - reh`} />
                                        <img src={herstory.cardSet[2]} alt={herstory.cardSet[2].name} key={`${herstory.cardSet[2].name} - reh`} />
                                    </div>
                                    <div className="teaser">{herstory.cardSet.description.slice(0,50)}</div>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='0'>
                                <Card.Body>
                                    <div>From: {herstory.date}</div>
                                <Card.Text>
                                    {herstory.cardSet.description}
                                </Card.Text>
                            <Button type="Submit" onClick={''} > Save and update your journal</Button>
                            <Button type="delete" onClick={''} >Delete this day's reading</Button>
                            </Card.Body>
                            </Accordion.Collapse>
                            
                        </Card>
                    )
             }
            , [])
        }


        render(){
            return(
                <Accordion>
                    {this.renderMe(this.props.herstory)}
                </Accordion>
            )
        }
    }

    export default ReadingRender;