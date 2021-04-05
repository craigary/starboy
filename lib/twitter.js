import querystring from 'querystring'

export const getTimeline = async id => {
  const queryParams = querystring.stringify({
    expansions:
      'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
    'tweet.fields':
      'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
    'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
    'media.fields':
      'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics',
    exclude: 'replies'
  })
  const res = await fetch(
    `https://api.twitter.com/2/users/${id}/tweets?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_KEY}`
      }
    }
  )
  const tweets = await res.json()
  const getAuthorInfo = authorId => {
    return tweets.includes.users.find(user => user.id === authorId)
  }
  const handleOriginalTweets = tweet => {
    const formattedTweet = {
      ...tweet,
      media:
        tweet?.attachments?.media_keys.map(
          key =>
            tweets.includes.media.find(media => media.media_key === key) || null
        ) || [],
      author: getAuthorInfo(tweet.author_id)
    }
    return formattedTweet
  }
  const handleRetweets = tweet => {
    const referencedTweet = tweets.includes.tweets.find(
      t => t.id === tweet.referenced_tweets[0].id
    )
    const formattedTweet = handleOriginalTweets(referencedTweet)
    return formattedTweet
  }
  const handleQuotedtweets = tweet => {
    const formattedTweet = handleOriginalTweets(tweet)
    const referencedTweet = tweets.includes.tweets.find(
      t => t.id === tweet.referenced_tweets[0].id
    )
    const formattedReferencedTweet = handleOriginalTweets(referencedTweet)
    formattedTweet.referenced_tweet = formattedReferencedTweet
    return formattedTweet
  }
  const tweetsToReturn = tweets.data.reduce((allTweets, tweet) => {
    console.log(tweet.created_at)
    let tweetWithAuthor = {}
    if (!tweet.referenced_tweets) {
      tweetWithAuthor = handleOriginalTweets(tweet)
    }
    if (tweet?.referenced_tweets?.[0]?.type === 'quoted') {
      tweetWithAuthor = handleQuotedtweets(tweet)
    }
    if (tweet?.referenced_tweets?.[0]?.type === 'retweeted') {
      tweetWithAuthor = handleRetweets(tweet)
    }
    return [tweetWithAuthor, ...allTweets]
  }, [])
  console.log(tweetsToReturn.reverse()[2])
  return tweetsToReturn
}
