# Keeping the Lights On

Ted Callahan

Companies
- CBRE
- Tune
- Textio
- Zonar

Agenda
1. Introduction
2. What are metrics, monitors, alerts, service level agreements
3. Demostrations w/AWS Lambda
4. Quick into on "Bahrioral Metrics"
5. Resources and Q/A

## Introduction - Why is this important?
- Beyond building new things, we're reponsible for mainting and securing existing software.
- What we build should meet the needs of customers
  - internal
  - external
  - ourselves (concepts that we talk about is being "on call")

  ## How we do this?
  1. Metrics
  2. Monitors
  3. Alerts
  4. SLAs

  ## Metrics
    - A thing you measure about hardware or software. It can be anything.
    - Two broad categories
      - System (the hardware itself, the system it runs on)
      - Behavioral (how the users interact with the software)
    - examples
      - % memory usage
Where do they come from, where do they go?
- Measure and publish
- collect
- report

Commone tools
- Datadog
- Prometheus, Grafana
- Cloud Native
  - AWS Cloudwatch
  - Google Cloud Monitoring
  - Azure Monituring

Monitors = metrics over time.
- System health
- Performance
- Compliance with SLAs

## Monitors - The Golden Four
Defined by Google's SRE Handbook
1. Latency (response time)
2. Traffic (request count, rate)
3. Errors 
4. Saturation (system load)

Addition: "Why isn't the dog barking?"

Alerts
- Created by giving thresholds to monitors
- Two basic levels:
  - Warnings (can be done during business hours, nothing to wake someone up over)
  - Critical (needs immediate attention)

Good alerts should always be actionable:
- "If I'm woken up at 3:00am, can I solve this?"

Error rate - unhandled uknown errors

Latency