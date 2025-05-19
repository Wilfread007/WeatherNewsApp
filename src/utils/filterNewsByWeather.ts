// export const filterNewsByWeather = (articles:any, temp:any) => {
//     if (temp <= 10) {
//       return articles.filter((a:any) => /death|depress|crisis|violence/i.test(a.title));
//     } else if (temp >= 30) {
//       return articles.filter((a:any) => /fear|panic|threat|climate/i.test(a.title));
//     } else {
//       return articles.filter((a:any) => /win|success|celebrate|joy|happy/i.test(a.title));
//     }
//   };
  

export const filterNewsByWeather = (articles: any[], temp: number) => {
    if (!Array.isArray(articles)) return [];
  
    // Define weather-specific keyword patterns
    const coldPattern = /death|depress|crisis|violence|recession|inflation|poverty|struggle/i;
    const hotPattern = /fear|panic|threat|drought|climate|heatwave|wildfire|emergency/i;
    const coolPattern = /win|success|celebrate|joy|happy|breakthrough|growth|victory/i;
  
    // Combine title and description text for filtering
    const filterByPattern = (pattern: RegExp) =>
      articles.filter((article) => {
        const combinedText = `${article.title || ''} ${article.description || ''}`;
        return pattern.test(combinedText);
      });
  
    let filtered: any[] = [];
  
    if (temp <= 10) {
      filtered = filterByPattern(coldPattern);
    } else if (temp >= 30) {
      filtered = filterByPattern(hotPattern);
    } else {
      filtered = filterByPattern(coolPattern);
    }
  
    // Logging (optional)
    console.log(`🔎 Weather temp: ${temp}° → Matched ${filtered.length} articles`);
    
    return filtered;
  };
  