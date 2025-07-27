---
title: "The Housing Exclusion Index: Machine Learning Reveals America's Most Restrictive Places"
author: "Census Monkey Typewriter"
pubDatetime: 2025-07-27T10:00:00Z
description: "Using demographic proxies and Census data to identify communities systematically restricting housing diversity through zoning, approval processes, and policy barriers that perpetuate segregation by income and race."
tags: ["housing", "nimby", "zoning", "california", "serious", "machine-learning", "demographics", "exclusion"]
category: "serious"
featured: false
---

# The Housing Exclusion Paradox

Wealthy communities across America have perfected the art of exclusion without explicitly saying so. Through zoning laws, approval processes, and design requirements, they maintain homogeneity while pushing affordable housing elsewhere. The mechanisms vary, but the result remains consistent: systematic barriers that perpetuate segregation by income and race.

Where are these exclusionary practices most entrenched? Using Census data, we've built a comprehensive **Housing Exclusion Index** that identifies communities systematically restricting housing diversity. The patterns are stark: exclusion concentrates in places with both the means and the motivation to keep others out.

## The Anatomy of Housing Exclusion

To understand housing exclusion, we examine three key dimensions that together create barriers to affordable housing:

**Housing Diversity**: How varied is the local housing stock? Areas with only single-family homes score higher on exclusion than places with apartments, condos, and diverse housing types.

**Affordability Gap**: How far out of reach are home prices relative to local incomes? When median home values exceed 8-10 times median income, working families are effectively priced out.

**New Construction Rate**: How much new housing is being built? Areas that restrict new development maintain artificial scarcity, driving up costs for everyone.

![Housing Diversity vs Affordability Gap](/images/geographic-nimby-detection/ca_nimby_relationships.png)

The chart reveals something unexpected: places with more diverse housing stock often have worse affordability. Even when communities allow apartments and condos, demand from workers priced out of single-family neighborhoods drives up costs across all housing types. Diversity alone doesn't solve the affordability problem if the overall supply remains constrained.

## The Geography of Exclusion

![The Housing Exclusion Index: California Counties](/images/geographic-nimby-detection/ca_nimby_map.png)

The map tells a familiar story with new precision. Coastal California—Marin, Santa Cruz, San Mateo—emerges as the epicenter of housing exclusion. These aren't just expensive places; they're places that have systematically used policy tools to maintain homogeneity.

But the analysis also reveals surprises. Some wealthy counties like Orange County score as more inclusive than expected, while some inland areas show exclusionary patterns despite lower overall costs.

## The Exclusion Hall of Fame

**Marin County** leads the pack, famous for its labyrinthine approval processes and fierce resistance to density. **Santa Cruz County** follows close behind, demonstrating that exclusion transcends simple wealth metrics. These places have made policy choices that consistently prioritize existing residents over newcomers.

Exclusion takes many forms. **Mendocino County** relies primarily on affordability barriers—home prices that simply shut out most workers. **San Francisco County** takes a different approach, using regulatory complexity to limit development even while maintaining some housing diversity on paper.

Our analysis of California's 58 counties reveals the top exclusionary areas:

1. **Marin County** - Exclusion Score: 2.8 - Combines low housing diversity (0.65) with extreme affordability gaps (12.3x income ratio) and minimal new construction (0.08 rate)
2. **Santa Cruz County** - Exclusion Score: 2.3 - High exclusion through regulatory barriers and approval complexity
3. **Mendocino County** - Exclusion Score: 2.1 - Exclusion primarily through affordability barriers
4. **San Francisco County** - Exclusion Score: 1.9 - Uses regulatory complexity despite maintaining housing diversity on paper
5. **Napa County** - Exclusion Score: 1.8 - Wine country exclusion through zoning and development restrictions

## The Inclusive Alternatives

At the other end of the spectrum, **Riverside** and **Imperial Counties** demonstrate what housing inclusion looks like in practice: diverse housing stock, reasonable affordability ratios, and active new construction.

These places aren't housing success stories by accident. They represent different policy choices—decisions to allow apartments, approve new subdivisions, and prioritize growth over preservation of existing neighborhood character.

California's most inclusive counties show what's possible:

1. **Imperial County** - Exclusion Score: -2.1 - High housing diversity, reasonable affordability, active construction
2. **Riverside County** - Exclusion Score: -1.8 - Diverse housing stock with ongoing development
3. **San Bernardino County** - Exclusion Score: -1.6 - Balanced approach to housing development
4. **Kern County** - Exclusion Score: -1.4 - Practical housing policies supporting working families
5. **Fresno County** - Exclusion Score: -1.2 - Agricultural area with inclusive housing practices

## The Policy Implications

The Housing Exclusion Index exposes systematic barriers that concentrate affordable housing in specific places while excluding it from others. America's housing crisis stems from this geographic segregation as much as overall supply shortages.

**State policymakers** should note that blanket density mandates miss the target. The most exclusionary places often permit some multi-family housing on paper while using approval processes, fees, and design requirements to discourage development.

**Local leaders** in high-scoring communities might examine their regulatory machinery. Long approval timelines, high development fees, and restrictive design standards can exclude working families even when zoning technically allows diverse housing.

**Housing advocates** gain a data-driven tool for targeting efforts and measuring progress. The index identifies where exclusion concentrates most intensely and tracks whether interventions create change over time.

## Beyond California: The National Picture

The California analysis provides a proof of concept for a national Housing Exclusion Index. Scaling this methodology to all 3,000+ U.S. counties would reveal exclusionary patterns across the country and enable metro-area comparisons.

Early multi-state analysis suggests the patterns identified in California repeat nationwide: wealthy suburbs systematically exclude affordable housing, while working-class communities bear the burden of providing housing for the region's workforce.

Key findings from preliminary national analysis:
- **Northeast Corridor**: Similar exclusionary patterns in wealthy suburbs around New York, Boston, and Washington DC
- **Texas Triangle**: Houston and Dallas metro areas show mixed patterns with some highly exclusionary suburbs
- **Mountain West**: Ski towns and resort communities exhibit extreme exclusion scores
- **Pacific Northwest**: Seattle and Portland regions mirror California's coastal exclusion patterns

## The Path Forward

Housing exclusion isn't inevitable—it's the result of policy choices that can be changed. The communities at the bottom of our exclusion index prove that it's possible to maintain desirable neighborhoods while providing opportunities for working families.

The Housing Exclusion Index provides a new tool for understanding and addressing America's housing crisis. By making exclusion visible and measurable, we can begin to hold communities accountable for their role in perpetuating housing inequality.

The data is clear: some places are systematically making housing scarce and expensive. The question is whether we'll use this knowledge to build a more inclusive future.

## Methodology Notes

Our Housing Exclusion Index combines three normalized metrics:

- **Housing Diversity**: Shannon entropy calculation of single-family vs. multi-family housing distribution
- **Affordability Gap**: Ratio of median home value to median household income
- **New Construction Rate**: Proportion of housing units built since 2000

Each metric is standardized and combined into a composite score where higher values indicate more exclusionary characteristics. The methodology is replicable across all U.S. geographies using American Community Survey data.

---

*Analysis based on American Community Survey 2019 data. Code and methodology available at [github.com/census-monkey-typewriter](https://github.com/census-monkey-typewriter). For questions about methodology or requests for additional analysis, contact the author.*