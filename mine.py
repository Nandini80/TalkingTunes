client = OpenAI(
    api_key= "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"
)
def openAiCall(message):
    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {
          "role": "user",
          "content": "{}".format(message)
        }
      ],
)
    output = response.choices[0].message.content
    print(output)