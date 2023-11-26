<script setup>
	
</script>

<template>
    <div class="right-profile-section profile">
          <div class="all-profile-mobile-heading">
            <img
              src="https://img.icons8.com/ios-filled/50/3db83a/less-than.png"
              alt=""
            />
            <span> My adverts</span>
          </div>
          <ul class="my-advert-in-profile">
            <li class="active">
              <img
                src="https://img.icons8.com/material-sharp/24/40dd50/checked--v1.png"
              />
              <span> Active </span>
              <span> (0)</span>
            </li>
            <li>
              <img
                src="https://img.icons8.com/material-outlined/24/fea03c/coming-soon.png"
              />
              <span>Reviewing </span>
              <span> (0)</span>
            </li>
            <li>
              <img
                src="https://img.icons8.com/ios-filled/50/FA5252/hand.png"
                alt=""
              />
              <span> Declined </span>
              <span> (0) </span>
            </li>
            <li>
              <img
                src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-Write-contact-us-tanah-basah-glyph-tanah-basah.png"
              />
              <span> Draft </span>
              <span> (0) </span>
            </li>
            <li>
              <img
                src="https://img.icons8.com/windows/32/6c8ea0/square-full.png"
              />
              <span> Closed </span>
              <span> (0)</span>
            </li>
            <li>
              <img
                src="https://img.icons8.com/external-basicons-solid-edtgraphics/50/355a76/external-checks-ui-edtim-solid-edtim.png"
              />
              <span>All</span>
              <span>(0)</span>
            </li>
          </ul>
          <div class="advert-in-profile-search-box">
            <img
              class="search-icon"
              src="https://img.icons8.com/ios-glyphs/30/737373/search--v1.png"
            />
            <input placeholder="Type your search here" type="text" />
            <img
              class="filter-icon"
              src="https://img.icons8.com/ios-filled/50/737373/empty-filter.png"
            />
          </div>
          <!-- start for active ads -->

          <div class="relative-advert-in-profile active">
            <div class="advert-in-profile-ad-box active">
              <div class="top-part">
                <img src="Assets/Images/images.jpg" alt="" />
                <div class="inside-ad-box">
                  <span class="title-of-ad"> Title of advert</span>
                  <span class="price-of-ad"> ₦ 0, 000</span>
                  <div class="active-renewed">
                    <span>active </span> <span>renewed 0 days</span>
                  </div>
                  <ol class="ad-stats">
                    <li>0 impressions</li>
                    <li>0 visitors</li>
                    <li>0 phone views</li>
                    <li>0 chats</li>
                  </ol>
                </div>
              </div>
              <div class="button-part">
                <ol class="edit-close">
                  <li>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/40dd50/external-Write-contact-us-tanah-basah-glyph-tanah-basah.png"
                      alt=""
                    />
                    <span>EDIT</span>
                  </li>
                  <li>
                    <img
                      src="https://img.icons8.com/windows/32/40dd50/square-full.png"
                      alt=""
                    />
                    <span>CLOSE</span>
                  </li>
                </ol>
                <ol class="renew-topad">
                  <li>
                    <img
                      src="https://img.icons8.com/ios-filled/50/40dd50/recurring-appointment.png"
                    />
                    <span>RENEW</span>
                  </li>
                  <li>TOP AD</li>
                </ol>
              </div>
            </div>
          </div>
          <!-- start for reviewing ads -->

          <div class="relative-advert-in-profile">
            <div class="advert-in-profile-ad-box reviewing">
              <div class="top-part">
                <img src="Assets/Images/images.jpg" alt="" />
                <div class="inside-ad-box">
                  <span class="title-of-ad"> Title of advert</span>
                  <span class="price-of-ad"> ₦ 0, 000</span>
                  <div class="active-renewed">
                    <span>reviewing </span> <span> </span>
                  </div>
                  <ol class="ad-stats">
                    <li>
                      <img
                        class="time"
                        src="https://img.icons8.com/ios/50/1A1A1A/clock--v3.png"
                      />
                      <span> live in 00 hours max</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div class="button-part red">
                <ol class="edit-close">
                  <li>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/40dd50/external-Write-contact-us-tanah-basah-glyph-tanah-basah.png"
                      alt=""
                    />
                    <span>EDIT</span>
                  </li>
                  <li>
                    <img
                      src="https://img.icons8.com/carbon-copy/100/FA5252/filled-trash.png"
                    />
                    <span>Delete</span>
                  </li>
                </ol>
                <ol class="renew-topad">
                  <li>
                    <img
                      src="https://img.icons8.com/ios-filled/50/40dd50/recurring-appointment.png"
                    />
                    <span>Publish</span>
                  </li>
                  <li>EDIT</li>
                </ol>
              </div>
            </div>
          </div>
          <!-- start for declined ads -->
          <div class="relative-advert-in-profile">
            <div class="advert-in-profile-ad-box declined">
              <a href="">
                <div class="top-part">
                  <img src="Assets/Images/images.jpg" alt="" />
                  <div class="inside-ad-box">
                    <span class="title-of-ad"> Title of advert</span>
                    <div class="price-and-declined">
                      <span class="price-of-ad"> ₦ 0, 000</span>
                      <div class="declined-ad">
                        <img
                          class="advert-type-indicator"
                          src="https://img.icons8.com/ios-filled/50/FA5252/hand.png"
                        /><span>Ad is declined </span>
                      </div>
                      <span class="ad-denied-word"
                        >Please, check and correct 4 mistakes
                      </span>
                      <!-- the 4 is for the number of mistakes detected in the advert -->
                    </div>
                    <ol class="ad-denied-reason">
                      <li>First Reason</li>
                      <li>Second Reason</li>
                      <li>Second Reason</li>
                      <li>Third Reason</li>
                    </ol>
                  </div>
                </div>
              </a>
              <div class="button-part red">
                <ol class="edit-close">
                  <li>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/40dd50/external-Write-contact-us-tanah-basah-glyph-tanah-basah.png"
                      alt=""
                    />
                    <span>EDIT</span>
                  </li>
                  <li>
                    <img
                      src="https://img.icons8.com/carbon-copy/100/FA5252/filled-trash.png"
                    />
                    <span>Delete</span>
                  </li>
                </ol>
                <ol class="renew-topad">
                  <li>
                    <img
                      src="https://img.icons8.com/ios-filled/50/40dd50/recurring-appointment.png"
                    />
                    <span>Publish</span>
                  </li>
                  <li>EDIT</li>
                </ol>
              </div>
            </div>
          </div>
          <!-- start for draft ads -->
          <div class="relative-advert-in-profile">
            <div class="advert-in-profile-ad-box draft">
              <div class="top-part">
                <img src="Assets/Images/images.jpg" alt="" />
                <div class="inside-ad-box">
                  <span class="title-of-ad"> Title of advert</span>
                  <span class="price-of-ad"> ₦ 0, 000</span>
                  <div class="active-renewed">
                    <span>draft </span> <span> </span>
                  </div>
                  <ol class="ad-stats">
                    <li>
                      <span> only 4 fields filled yet</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div class="button-part red">
                <ol class="edit-close">
                  <li>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/40dd50/external-Write-contact-us-tanah-basah-glyph-tanah-basah.png"
                      alt=""
                    />
                    <span>EDIT</span>
                  </li>
                  <li>
                    <img
                      src="https://img.icons8.com/carbon-copy/100/FA5252/filled-trash.png"
                    />
                    <span>Delete</span>
                  </li>
                </ol>
                <ol class="renew-topad">
                  <li>
                    <img
                      src="https://img.icons8.com/ios-filled/50/40dd50/recurring-appointment.png"
                    />
                    <span>Publish</span>
                  </li>
                  <li>EDIT</li>
                </ol>
              </div>
            </div>
          </div>
          <!-- start for closed ads -->

          <div class="relative-advert-in-profile">
            <div class="advert-in-profile-ad-box closed">
              <div class="top-part">
                <img src="Assets/Images/images.jpg" alt="" />
                <div class="inside-ad-box">
                  <span class="title-of-ad"> Title of advert</span>
                  <span class="price-of-ad"> ₦ 0, 000</span>
                  <div class="active-renewed">
                    <span>closed </span> <span></span>
                  </div>
                  <ol class="ad-stats">
                    <li>0 impressions</li>
                    <li>0 visitors</li>
                    <li>0 phone views</li>
                    <li>0 chats</li>
                  </ol>
                </div>
              </div>
              <div class="button-part">
                <ol class="edit-close">
                  <li>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/40dd50/external-Write-contact-us-tanah-basah-glyph-tanah-basah.png"
                      alt=""
                    />
                    <span>EDIT</span>
                  </li>
                  <li>
                    <img
                      src="https://img.icons8.com/carbon-copy/100/FA5252/filled-trash.png"
                    />
                    <span>Delete</span>
                  </li>
                </ol>
                <ol class="renew-topad">
                  <li>
                    <img
                      src="https://img.icons8.com/ios-filled/50/40dd50/recurring-appointment.png"
                    />
                    <span>Publish</span>
                  </li>
                  <li>Publish</li>
                </ol>
              </div>
            </div>
          </div>
          <!-- start for all ads -->

          <div class="relative-advert-in-profile">
            <div class="advert-in-profile-ad-box active">
              <div class="top-part">
                <img src="Assets/Images/images.jpg" alt="" />
                <div class="inside-ad-box">
                  <span class="title-of-ad"> Title of advert</span>
                  <span class="price-of-ad"> ₦ 0, 000</span>
                  <div class="active-renewed">
                    <span>active </span> <span>renewed 0 days</span>
                  </div>
                  <ol class="ad-stats">
                    <li>0 impressions</li>
                    <li>0 visitors</li>
                    <li>0 phone views</li>
                    <li>0 chats</li>
                  </ol>
                </div>
              </div>
              <div class="button-part">
                <ol class="edit-close">
                  <li>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/40dd50/external-Write-contact-us-tanah-basah-glyph-tanah-basah.png"
                      alt=""
                    />
                    <span>EDIT</span>
                  </li>
                  <li>
                    <img
                      src="https://img.icons8.com/windows/32/40dd50/square-full.png"
                      alt=""
                    />
                    <span>CLOSE</span>
                  </li>
                </ol>
                <ol class="renew-topad">
                  <li>
                    <img
                      src="https://img.icons8.com/ios-filled/50/40dd50/recurring-appointment.png"
                    />
                    <span>RENEW</span>
                  </li>
                  <li>TOP AD</li>
                </ol>
              </div>
            </div>
            <div class="advert-in-profile-ad-box reviewing">
              <div class="top-part">
                <img src="Assets/Images/images.jpg" alt="" />
                <div class="inside-ad-box">
                  <span class="title-of-ad"> Title of advert</span>
                  <span class="price-of-ad"> ₦ 0, 000</span>
                  <div class="active-renewed">
                    <span>reviewing </span> <span> </span>
                  </div>
                  <ol class="ad-stats">
                    <li>
                      <img
                        class="time"
                        src="https://img.icons8.com/ios/50/1A1A1A/clock--v3.png"
                      />
                      <span> live in 00 hours max</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div class="button-part red">
                <ol class="edit-close">
                  <li>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/40dd50/external-Write-contact-us-tanah-basah-glyph-tanah-basah.png"
                      alt=""
                    />
                    <span>EDIT</span>
                  </li>
                  <li>
                    <img
                      src="https://img.icons8.com/carbon-copy/100/FA5252/filled-trash.png"
                    />
                    <span>Delete</span>
                  </li>
                </ol>
                <ol class="renew-topad">
                  <li>
                    <img
                      src="https://img.icons8.com/ios-filled/50/40dd50/recurring-appointment.png"
                    />
                    <span>Publish</span>
                  </li>
                  <li>EDIT</li>
                </ol>
              </div>
            </div>
            <div class="advert-in-profile-ad-box declined">
              <a href="">
                <div class="top-part">
                  <img src="Assets/Images/images.jpg" alt="" />
                  <div class="inside-ad-box">
                    <span class="title-of-ad"> Title of advert</span>
                    <div class="price-and-declined">
                      <span class="price-of-ad"> ₦ 0, 000</span>
                      <div class="declined-ad">
                        <img
                          class="advert-type-indicator"
                          src="https://img.icons8.com/ios-filled/50/FA5252/hand.png"
                        /><span>Ad is declined </span>
                      </div>
                      <span class="ad-denied-word"
                        >Please, check and correct 4 mistakes
                      </span>
                      <!-- the 4 is for the number of mistakes detected in the advert -->
                    </div>
                    <ol class="ad-denied-reason">
                      <li>First Reason</li>
                      <li>Second Reason</li>
                      <li>Second Reason</li>
                      <li>Third Reason</li>
                    </ol>
                  </div>
                </div>
              </a>
              <div class="button-part red">
                <ol class="edit-close">
                  <li>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/40dd50/external-Write-contact-us-tanah-basah-glyph-tanah-basah.png"
                      alt=""
                    />
                    <span>EDIT</span>
                  </li>
                  <li>
                    <img
                      src="https://img.icons8.com/carbon-copy/100/FA5252/filled-trash.png"
                    />
                    <span>Delete</span>
                  </li>
                </ol>
                <ol class="renew-topad">
                  <li>
                    <img
                      src="https://img.icons8.com/ios-filled/50/40dd50/recurring-appointment.png"
                    />
                    <span>Publish</span>
                  </li>
                  <li>EDIT</li>
                </ol>
              </div>
            </div>
            <div class="advert-in-profile-ad-box draft">
              <div class="top-part">
                <img src="Assets/Images/images.jpg" alt="" />
                <div class="inside-ad-box">
                  <span class="title-of-ad"> Title of advert</span>
                  <span class="price-of-ad"> ₦ 0, 000</span>
                  <div class="active-renewed">
                    <span>draft </span> <span> </span>
                  </div>
                  <ol class="ad-stats">
                    <li>
                      <span> only 4 fields filled yet</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div class="button-part red">
                <ol class="edit-close">
                  <li>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/40dd50/external-Write-contact-us-tanah-basah-glyph-tanah-basah.png"
                      alt=""
                    />
                    <span>EDIT</span>
                  </li>
                  <li>
                    <img
                      src="https://img.icons8.com/carbon-copy/100/FA5252/filled-trash.png"
                    />
                    <span>Delete</span>
                  </li>
                </ol>
                <ol class="renew-topad">
                  <li>
                    <img
                      src="https://img.icons8.com/ios-filled/50/40dd50/recurring-appointment.png"
                    />
                    <span>Publish</span>
                  </li>
                  <li>EDIT</li>
                </ol>
              </div>
            </div>
            <div class="advert-in-profile-ad-box closed">
              <div class="top-part">
                <img src="Assets/Images/images.jpg" alt="" />
                <div class="inside-ad-box">
                  <span class="title-of-ad"> Title of advert</span>
                  <span class="price-of-ad"> ₦ 0, 000</span>
                  <div class="active-renewed">
                    <span>closed </span> <span></span>
                  </div>
                  <ol class="ad-stats">
                    <li>0 impressions</li>
                    <li>0 visitors</li>
                    <li>0 phone views</li>
                    <li>0 chats</li>
                  </ol>
                </div>
              </div>
              <div class="button-part">
                <ol class="edit-close">
                  <li>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/40dd50/external-Write-contact-us-tanah-basah-glyph-tanah-basah.png"
                      alt=""
                    />
                    <span>EDIT</span>
                  </li>
                  <li>
                    <img
                      src="https://img.icons8.com/carbon-copy/100/FA5252/filled-trash.png"
                    />
                    <span>Delete</span>
                  </li>
                </ol>
                <ol class="renew-topad">
                  <li>
                    <img
                      src="https://img.icons8.com/ios-filled/50/40dd50/recurring-appointment.png"
                    />
                    <span>Publish</span>
                  </li>
                  <li>Publish</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
</template>