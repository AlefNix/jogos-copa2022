import { Card, CardContent, Grid, Typography } from "@mui/material"
import moment from "moment"
import flags from "../../providers/utils/flags"
import "./CardsMatchs.css"

let url = "https://worldcupjson.net/matches/current"


 let data =[];

 async function getCurrentTime(){
    const response = await fetch(url);
    const data = await response.json();
    addData(data[0].time)
 }

function addData(object){
    data.push(object);

}
getCurrentTime()
console.log(data)

function CardMatch({ match }) {
        return (
        <Card sx={{ color: "#fff", minWidth: 275, mb: "1.5em" }} className="cards"> 
            <CardContent>
                <Typography sx={{ fontSize: 24, mb: 1.5, color: "#ffffff" }} className="textoSombra">
                    {match.stage_name === "First stage" ? "Fase de Grupos": ""  || match.stage_name === "Round of 16" ? "Oitavas de Final" : "" || match.stage_name === "Quarter-final" ? "Quartas de Final" : "" || match.stage_name === "Semi-final" ? "Quartas de Final" : "" || match.stage_name === "Play-off for third place" ? "Terceiro Lugar" : "" || match.stage_name === "Final" ? "Final" : ""} 
                </Typography>

                <Grid container alignItems="center" mb="1em">
                    <Grid container item xs={5} alignItems="center" justifyContent="flex-end" gap="0.4em"  className="textoSombra">
                        {match.home_team.country}
                        <img src={flags[match.home_team.country]} width="40.5" height="30" alt="flag"/>
                    </Grid>

                    <Grid item xs={2}  className="textoSombra">
                        {match.status === "completed" || match.status === "in_progress" ? match.home_team.goals : ""}
                        <span style={{ margin: "0 0.2em 0 0.2em" }}>X</span>
                        {match.status === "completed" || match.status === "in_progress" ? match.away_team.goals : ""}
                    </Grid>

                    <Grid container item xs={5} alignItems="center" gap="0.4em"  className="textoSombra">
                        <img src={flags[match.away_team.country]} width="40.5" height="30" alt="flag"/>
                        {match.away_team.country}
                    </Grid>
                </Grid>

                <Typography sx={{ fontSize: 20, mb: 1.5, color: "#daa520" }} className="textoSombra">
                    {moment(match.datetime).format('H:mm') + " Horas"}
                </Typography>

                <Typography item variant="h6" className="textoSombra">
                {match.status === "in_progress" ? data + "" : null}
                </Typography>

                <Typography variant="body2" sx={{ fontSize: 18, mb: 1.5, color: "#FFF" }} className="textoSombra">
                    {"Local: " + match.venue}
                </Typography>

                {match.status === "in_progress"?
                    <Typography color="#daa520" variant="h6" component="div" className="textoSombra">
                        Bola Rolando
                    </Typography> : "" || match.status === "completed"?
                    <Typography color="#daa520" variant="h6" component="div" className="textoSombra">
                        Jogo Finalizado
                    </Typography> : "" || match.status === "future_scheduled"?
                    <Typography color="#daa520" variant="h6" component="div" className="textoSombra">
                        Em Breve
                    </Typography> : ""
                }

            </CardContent>
        </Card>
    )
}

export default CardMatch