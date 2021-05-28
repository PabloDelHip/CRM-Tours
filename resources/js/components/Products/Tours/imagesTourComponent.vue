<template>
  <div>
    <div class="row">
      <div class="card-body">
        <div id="actions" class="row">
          <div class="col-lg-6">
            <input
              type="file"
              id="file"
              class="file"
              @change="onFileChange"
              accept="image/*"
              style="display: none;"
              multiple="multiple"
              ref="imagesFile"
            />
            <div class="btn-group w-100">
              <span
                class="btn btn-success col fileinput-button dz-clickable"
                @click="$refs.imagesFile.click()"
              >
                <i class="fas fa-plus"></i>
                <span>Agregar</span>
              </span>
              <button
                type="submit"
                class="btn btn-primary col start"
                @click="uploadPictures"
              >
                <i class="fas fa-upload"></i>
                <span>Subir</span>
              </button>
              <button
                type="reset"
                class="btn btn-warning col cancel"
                @click="removeNewPictures"
              >
                <i class="fas fa-times-circle"></i>
                <span>Cancelar</span>
              </button>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-center">
            <div class="fileupload-process w-100">
              <div
                id="total-progress"
                class="progress progress-striped active"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="0"
              >
                <div
                  class="progress-bar progress-bar-success"
                  :style="'width:' + picturesPercent + '%;'"
                  data-dz-uploadprogress=""
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-3" v-for="(preview, index) in pictures" :key="index">
        <div class="info-box" :class="preview.newImage ? 'bg-danger' : (preview.status ? 'bg-success' : 'bg-warning')">
          <div class="alert-dismissible" style="padding: 0px;">
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-hidden="true"
              @click="removeImage(index)"
              v-if="preview.newImage"
            >
              ×
            </button>
          </div>
          <div class="position-relative">
            <img
              v-bind:src="preview.imagePreview"
              alt="Photo 1"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ImagesTour from "../../../providers/products/tours/ImagesTour";

const ImagesTourResource = new ImagesTour();
export default {
  props: {
    idTour: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      picturesPercent: 0,
      pictures: [],
    };
  },
  async mounted() {
    await this.getImagesTour();
  },
  methods: {
    getImageTourForm(imageBase64, status) {
      return {
        url_image: imageBase64,
        status: status,
        tour_id: +this.idTour,
      };
    },
    async getImagesTour() {
      var response = (await ImagesTourResource.getByTourId(this.idTour)).data;
      if (!response.success) {
        return false;
      }
      if (response.data == null) {
        return;
      }
      var data = response.data;
      for (var i = 0; i < data.length; i++) {
        var picture = {
          newImage: false,
          id: data[i].id,
          imagePreview: data[i].url_image,
          status: data[i].status,
        };
        this.pictures.push(picture);
      }
    },
    onFileChange(event) {
      var files = event.target.files;
      if (files.length < 1) {
        return;
      }
      this.picturesPercent = 0;
      for (var i = 0; i < files.length; i++) {
        var currentPicture = files[i];
        if (
          !currentPicture ||
          !/\.(jpe?g|png|gif)$/i.test(currentPicture.name) ||
          currentPicture.size / 1024 / 1024 > 2
        ) {
          continue;
        }
        let reader = new FileReader();

        reader.addEventListener(
          "load",
          function() {
            var result = reader.result;
            this.pictures.push({
              newImage: true,
              id: 0,
              image: currentPicture,
              imagePreview: result,
              status: true,
            });
          }.bind(this),
          false
        );
        reader.readAsDataURL(currentPicture);
      }
    },
    removeImage(index) {
      var image = this.pictures[index];

      if (image.newImage) {
        this.pictures.splice(index, 1);
        return;
      }
    },
    removeNewPictures() {
      var copy = this.pictures;
      for (var i = 0; i < copy.length; i++) {
        if (copy[i].newImage) {
          this.pictures.splice(i, 1);
        }
      }
    },
    async uploadPictures() {
      this.picturesPercent = 0;
      var picturesToUpload = this.pictures.filter((pic) => pic.newImage);
      var totalCount = picturesToUpload.length;
      if (totalCount == 0) {
        return;
      }
      var finishCount = 0;
      for (var i = 0; i < picturesToUpload.length; i++) {
        var picture = picturesToUpload[i];
        var response = await this.saveImageTour(
          picture.id,
          picture.imagePreview,
          picture.status
        );
        if (response.success) {
          picture.id = response.data.id;
        }

        picture.newImage = false;
        finishCount++;
        console.log("Finish: " + finishCount);
        this.picturesPercent = (finishCount * 100) / totalCount;
      }
    },
    async saveImageTour(id, imageBase64, status) {
      var response = null;

      let formData = this.getImageTourForm(imageBase64, status);

      if (id == 0) {
        response = await this.saveNewImageTour(formData);
      } else {
        response = await this.saveEditImageTour(id, formData);
      }
      return response;
    },
    async saveNewImageTour(formData) {
      var response = (await ImagesTourResource.createImagesTour(formData)).data;
      return response;
    },
    async saveEditImageTour(id, formData) {
      var response = (await ImagesTourResource.updateImagesTour(id, formData))
        .data;
      return response;
    },
  },
};
</script>
