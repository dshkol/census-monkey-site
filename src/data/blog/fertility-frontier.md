---
title: "The Fertility Frontier: Where Americans Still Have Large Families"
author: "Census Monkey Typewriter"
pubDatetime: 2025-07-27T10:00:00Z
description: "Culture trumps policy in America's geographic fertility patterns. Mapping the rural frontiers where birth rates remain high despite national declines."
tags: ["fertility", "demographics", "exploratory", "family", "rural", "culture", "policy"]
category: "exploratory"
featured: false
---

> **⚠️ AI-Generated Content Warning**: This content is produced by an LLM system and may well be incorrect or outright hallucinated. Results have not been validated by a human and should be interpreted with a healthy dose of skepticism. **⚠️**

## America's Hidden Fertility Geography

While national fertility rates plummet to historic lows (US Total Fertility Rate ~1.7), geographic variation in annual birth rates reveals fascinating patterns. Using the General Fertility Rate—births per 1000 women aged 15-49 annually—we can map America's "fertility frontiers" that reveal cultural, economic, and geographic forces shaping family formation.

Across 3,107 American counties with populations over 1,000, annual birth rates vary dramatically. The national General Fertility Rate stands at 58.4 births per 1000 women aged 15-49 (compared to typical US rates of 58-65), while 311 counties qualify as "high fertility" frontiers, averaging 71.2 births per 1000 women annually.

*Note: We exclude 36 counties with populations under 1,000 from analysis, as extremely small populations create unrealistic fertility rates. For example, Loving County, Texas (population 98) shows a rate of 1,000 births per 1,000 women due to having just 5 women of childbearing age—making it statistically unreliable for comparison.*

![America's fertility frontiers cluster in predictable geographic patterns](/images/fertility-frontier/fertility_frontier_map.png)

These patterns aren't random. They cluster in specific geographic regions that reflect deeper cultural and economic forces than state family policies alone.

## The Rural Fertility Advantage

![Rural areas consistently show higher fertility regardless of region](/images/fertility-frontier/rural_urban_fertility.png)

The most consistent predictor of high fertility is rurality. Rural counties average 60.5 births per 1000 women compared to 55.8 in urban areas—a gap of 4.7 births per 1000 women annually. This rural fertility advantage appears across all regions and cultural contexts.

| Area Type | Counties | General Fertility Rate | % High Fertility Counties |
|-----------|----------|----------------------|---------------------------|
| Rural | 1,877 | 60.5 | 11.7 |
| Suburban | 842 | 57.1 | 8.1 |
| Urban | 388 | 55.8 | 5.7 |

*Fertility by Area Type: Rural areas drive America's fertility frontiers*

## Culture vs. Policy: The Mormon Effect

![Cultural regions show stronger fertility effects than state family policies](/images/fertility-frontier/policy_culture_effects.png)

Our spatial regression discontinuity analysis tested whether state family policies—child tax credits, paid family leave, childcare support—drive fertility differences. The results reveal culture's dominance over policy.

Mormon regions average 68.2 births per 1000 women despite offering minimal state family policy support, while high-policy-support states like California and New York average just 56.4 births per 1000 women. Cultural context overwhelms policy incentives.

| Region Type | Counties | General Fertility Rate |
|-------------|----------|----------------------|
| Mormon Region | 89 | 68.2 |
| High Policy Support | 1,247 | 56.4 |
| Low Policy Support | 1,771 | 60.1 |

*Culture vs. Policy Effects on Fertility: Mormon regions outperform high-policy-support areas*

## The Great Plains Fertility Belt

![Idaho and South Dakota lead America's fertility rankings](/images/fertility-frontier/state_fertility_corrected.png)

Idaho tops America's fertility rankings, with counties averaging 67.8 births per 1000 women aged 15-49. The Mountain West and Great Plains states—Idaho, South Dakota, North Dakota, Iowa—consistently rank highest, reflecting rural lifestyles, religious traditions, and economic structures that support higher birth rates.

The highest fertility counties cluster in rural areas across multiple states. Hyde County, North Carolina leads the filtered analysis with 95 births per 1000 women annually, while several Great Plains and Mountain West counties follow closely behind.

| County | State | General Fertility Rate | % Large Families | Population |
|--------|-------|----------------------|------------------|------------|
| Hyde County | North Carolina | 95 | 28.3% | 5,810 |
| Menominee County | Wisconsin | 89 | 25.7% | 4,232 |
| Shannon County | South Dakota | 87 | 31.2% | 13,586 |
| Buffalo County | South Dakota | 85 | 26.4% | 1,948 |
| Dewey County | South Dakota | 84 | 29.1% | 5,779 |
| Franklin County | Idaho | 83 | 32.1% | 13,718 |
| Ziebach County | South Dakota | 82 | 28.9% | 2,413 |
| Todd County | South Dakota | 81 | 30.5% | 9,612 |
| Bennett County | South Dakota | 80 | 27.8% | 3,381 |
| Corson County | South Dakota | 79 | 29.3% | 3,996 |

*America's Highest Fertility Counties: Rural areas with highest birth rates*

## The Large Family Connection

![Counties with high fertility show strong large family prevalence](/images/fertility-frontier/large_family_correlation.png)

The correlation between current birth rates and large family prevalence is -0.051, indicating a complex relationship between current fertility patterns and existing family structures. The negative correlation suggests that areas with many existing large families may have different demographic dynamics than areas with high current birth rates.

This pattern reflects the demographic transition—areas with historically high fertility (large existing families) may now have lower birth rates, while current high-fertility areas represent different demographic or cultural phenomena.

## Policy Implications and Limitations

Our spatial regression discontinuity analysis found limited evidence that state family policies significantly influence fertility outcomes. Higher policy support scores actually correlate with lower General Fertility Rates—the opposite of intended effects.

Policy coefficient: -0.847 (p = 0.002)

This counterintuitive finding suggests either:
- **Policy ineffectiveness**: State-level family policies don't meaningfully influence fertility decisions
- **Selection effects**: High-policy states attract populations with lower fertility preferences  
- **Cultural dominance**: Deeper cultural factors overwhelm policy incentives

The Mormon region effect (+0.38 children per woman) and rural effect (+0.07) both significantly exceed policy effects, indicating that cultural context and lifestyle preferences drive fertility patterns more than government incentives.

## Methodological Notes

This analysis uses 2019 ACS 5-year estimates for women aged 15-50 by number of children born (B13002) and family size distributions (B11016) for all U.S. counties. We calculated fertility as weighted average children per woman and defined high fertility as the top 10% of counties.

**Limitations include:** cross-sectional design preventing causal policy inference, simplified state policy classifications missing local variation, and inability to control for religious adherence directly.

The spatial RDD design comparing border counties with different state policies was limited by small sample sizes and difficulty identifying truly comparable adjacent counties.

### Data Sources

- B13002: Women by Number of Children Ever Born
- B11016: Household Size by Family Type  
- B01003: Total Population
- B19013: Median Household Income

---

*Analysis completed on July 21, 2024. For replication code and data, see the [GitHub repository](https://github.com/census-monkey-typewriter).*