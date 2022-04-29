let textB;

function textBar (a) {
  
  let h = 300;
  
  textB = createDiv("")
    .parent("cont")
    .position(0, height-h)
    .size(width, h)
    .style("background", "white")
    .style("color", "black")
    .style("font-size", "20px")
    .style("padding", "10px")
    .style("padding-bottom", "60px")
}

function displayText (a) {
  
  textB.html(des[a])
  
}

let des = [`The One World Centre (OWC) is an Isle of Man based charity dedicated to education and action around global issues such as climate change, inequality, and human rights abuses. The Isle of Man is a 572km2 island located in the Irish Sea between the United Kingdom and Ireland. The Island’s population is approximately 83,000, with roughly 9,000 (11%) of those people being aged between 20 to 29 years old. The One World Centre records low engagement from this age group, raising concerns that the somewhat isolated nature of the island is sheltering this group from global issues and their broader impact on island life.
<br>
<br>
New means need to be found to engage the target age group with the activities and education on offer by the OWC. This will necessarily include identifying habits and trends among the demographic when it comes to international engagement and engagement with charities like the OWC. Current knowledge of relevant issues and engagement levels of the target demographic through other channels will need to be ascertained, as will overall motivation to engage in such issues. Where engagement may already be present with the OWC’s existing materials, the user experience will need to be mapped through the eyes of the target demographic to determine where and why engagement may not be translating into measurable action and/or donations.`,
           
           `Given time constraints, secondary data will be mined to garner a deeper understanding of the issue and build on the issues identified in the interview already conducted with the OWC's representative. Members of the target demographic will be asked to provide feedback on design concepts as the project progresses.`,
           
           `The primary challenge to overcome is time limit (just two weeks, with an already mounting workload). Finding suitable test subjects may also prove tricky within the timeframe.`]