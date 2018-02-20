---
title: File Access Control – A firewall for your private files in Nextcloud
author: Jos Poortvliet
type: post
date: 2016-08-25T09:56:21+00:00
url: /blog/file-access-control-a-firewall-for-your-private-files-in-nextcloud/
featured_image: https://nextcloud.com/media/Screenshot_20160825_110503.png
has_been_saved:
  - 1
publish_post_category:
  - 22
publish_to_discourse:
  - 1
discourse_post_id:
  - 9789
discourse_permalink:
  - https://help.nextcloud.com/t/file-access-control-a-firewall-for-your-private-files-in-nextcloud/2584
discourse_comments_raw:
  - '{"id":2584,"posts_count":1,"filtered_posts_count":1,"posts":[],"participants":[{"id":-1,"username":"system","avatar_template":"https://help.nextcloud.com/user_avatar/help.nextcloud.com/system/{size}/843_1.png"}]}'
discourse_last_sync:
  - 1519119086
categories:
  - blog
  - news

---
When you think about a firewall, you think about a complicated tool big companies use to keep hackers out of their networks. And perhaps you think about the many movies where weird visuals are used to represent them being used and broken through. Nextcloud has the File Access Control app which acts as a bit of a firewall and while it helps protect businesses secrets, there are use cases for home users as well.

## Introducing Two Factor Authentication

Two factor authentication has becoming quite popular in the last months/years. So you go ahead and enable all those fancy things on various websites you use. Note that they often provide you with a list of recovery keys! Where do you put those keys, to make sure you don&#8217;t ever lose them? There is this self-hosted cloud solution you use, with the slogan &#8220;**a safe home for all your data**&#8220;. And it sure can help with this!

By putting your keys on your Nextcloud you keep them to yourself. Yet, Nextcloud aims to make sharing easy. You don&#8217;t want to accidentally share your recovery keys, do you? Nor would you want your sync client on your phone to, all too easily, give access to these files. So is there an extra layer of protection possible, one that protects from accidental sharing or a stolen phone?

## Protecting the keys

This is where the **File Access Control** app joins the party:

1. As a first step you assign the tag \`Protected file\` to your recovery files in the web UI.

2. You go to \`admin settings\` > \`File access control\` and start a new rule group:</p> 

1. \`File system tag\` **is tagged with** \`Protected file\`

2. \`Request user agent\` **is not** \`Desktop client\`</ul> 

Your files can now no longer be downloaded and synced with the android client or a web browser.<figure id="attachment_889" class="thumbnail wp-caption aligncenter" style="width: 1024px">

[<img src="https://nextcloud.com/media/Screenshot_20160825_110503-1024x431.png" alt="This would disallow the client and only allow the web interface (and only Firefox!) from the local network." width="1024" height="431" class="size-large wp-image-889" srcset="https://nextcloud.com/media/Screenshot_20160825_110503-1024x431.png 1024w, https://nextcloud.com/media/Screenshot_20160825_110503-300x126.png 300w, https://nextcloud.com/media/Screenshot_20160825_110503-768x324.png 768w, https://nextcloud.com/media/Screenshot_20160825_110503.png 1277w" sizes="(max-width: 1024px) 100vw, 1024px" />][1]<figcaption class="caption wp-caption-text">This would disallow the client and only allow the web interface (and only Firefox!) from the local network.</figcaption></figure> 

Now to be sure the files are also not delivered to your laptop, you can add a second rule that only allows the Desktop client when the IP is the local IP of your Desktop PC which accesses the instance via the LAN rather then the internet:

1. \`File system tag\` **is tagged with** \`Protected file\`

2. \`Request user agent\` **is** \`Desktop client\`

3. \`Request remote address\` **does not match IPv4** \`192.168.176.42​/32\`

As you see, the File Access Control app can help ensure your data stays within the confines of your house or follows other rules which ensure you don&#8217;t accidentally make them available where you wouldn&#8217;t want them. Note that it is NOT a super secure solution, you can&#8217;t use it to replace https or other encryption solutions! But it can avoid mistakes through accidental sharing and such.

_Post by Joas, main author of the File Access Control app_

 [1]: https://nextcloud.com/media/Screenshot_20160825_110503.png