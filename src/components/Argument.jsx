import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

// animated timeline
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { argcon } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'



const contentMap = {
  "Data Collection": (
    <span className="mt-5 space-y-2 text-[#f3f3f3] tracking-wider">
      We have collected about 50-100 photos from each of our friends.
      Then mount Google Colab with Google Drive
      <br />

    </span>
  ),
  "Installs": (
    <span className="mt-5 space-y-2 text-[#f3f3f3] tracking-wider">
      <b className="text-orange-500">TensorFlow: </b>
      this is widely used for building and training deep learning models, which we will use for image classification.
      <br />
      <b className='text-orange-500'>Matplotlib: </b>
      Obviously for data visualization.
      <br />
      <b className='text-orange-500'>Pyheif: </b>
      used for Loading and processing HEIF images in Python.
      <br />
      <b className='text-orange-500'>Pillow: </b>
      used for saving images in different formats (JPEG, PNG, etc.).

      <br />
      <b className='text-orange-500'>Filetype: </b>
      Identifying file types.
    </span>
  ),
  "Imports": (
    <span className="mt-5 space-y-2 text-[#f3f3f3] tracking-wider">
      {/* os */}
      <span className='text-purple-500 font-bold'>import</span> os<span className='text-red-500 font-bold'>: </span><br />
      <span className='ml-[10px]'>Used for working with file paths and make directories in Google Drive.</span>
      <br />

      {/* shutil */}
      <span className='text-purple-500 font-bold'>import</span> shutil<span className='text-red-500 font-bold'>: </span><br />
      <span className='ml-[10px]'>Used for copying, moving, or deleting files and directories.</span>
      <br />

      {/* train_test_split */}
      {/* <span className='text-purple-500 font-bold'>from</span> sklearn.model_selection  */}
      <span className='text-purple-500 font-bold'>import</span> train_test_split<span className='text-red-500 font-bold'>: </span><br />
      <span className='ml-[10px]'>Used for splitting images into training and testing datasets.</span>
      <br />

      {/* load_model */}
      {/* <span className='text-purple-500 font-bold'>from</span> tensorflow.keras.models  */}
      <span className='text-purple-500 font-bold'>import</span> load_model<span className='text-red-500 font-bold'>: </span><br />
      <span className='ml-[10px]'>Loads a saved model to test it with new, unseen images for classification.</span>
      <br />

      {/* ImageDataGenerator */}
      {/* <span className='text-purple-500 font-bold'>from</span> tensorflow.keras.preprocessing.image  */}
      <span className='text-purple-500 font-bold'>import</span> ImageDataGenerator<span className='text-red-500 font-bold'>: </span><br />
      <span className='ml-[10px]'>Preprocesses and augments image data. Automatically resizes, normalizes, and creates batches.</span>
      <br />

      {/* MobileNetV2 */}
      {/* <span className='text-purple-500 font-bold'>from</span> tensorflow.keras.applications  */}
      <span className='text-purple-500 font-bold'>import</span> MobileNetV2<span className='text-red-500 font-bold'>: </span><br />
      <span className='ml-[10px]'>Loads a lightweight pretrained model for transfer learning, ideal for image classification tasks.</span>
      <br />

      {/* Layers */}
      {/* <span className='text-purple-500 font-bold'>from</span> tensorflow.keras.layers  */}
      <span className='text-purple-500 font-bold'>import</span> GlobalAveragePooling2D, Dense<span className='text-red-500 font-bold'>: </span><br />
      <span className='ml-[10px]'>Used to add custom layers: pooling reduces feature maps, Dense creates fully-connected layers.</span>
      <br />

      {/* Model */}
      {/* <span className='text-purple-500 font-bold'>from</span> tensorflow.keras.models  */}
      <span className='text-purple-500 font-bold'>import</span> Model<span className='text-red-500 font-bold'>: </span><br />
      <span className='ml-[10px]'>Allows custom model building by connecting layers from input to output manually.</span>
      <br />

      {/* Callbacks */}
      {/* <span className='text-purple-500 font-bold'>from</span> tensorflow.keras.callbacks  */}
      <span className='text-purple-500 font-bold'>import</span> EarlyStopping, ModelCheckpoint<span className='text-red-500 font-bold'>: </span><br />
      <span className='ml-[10px]'>Helps stop training early if the model stops improving, and saves the best-performing model.</span>
      <br />

      {/* numpy */}
      <span className='text-purple-500 font-bold'>import</span> numpy
      {/* <span className='text-purple-500 font-bold'>as</span> np */}
      <span className='text-red-500 font-bold'>: </span><br />
      <span className='ml-[10px]'>Handles numerical operations, arrays, and matrix transformations efficiently.</span>
      <br />


    </span>

  ),
  "Convert Images": (
    <span className="mt-5 space-y-2 text-[#f3f3f3] tracking-wider">
      We looped through the image files to rename them with the corresponding person’s name.
      <br />
      For compatibility, we used <b className='text-orange-500'>Pyheif</b> and <b className='text-orange-500'>Pillow</b> to convert HEIC files into JPEG format.
    </span>
  ),
  "Train Test Split": (
    <span className="mt-5 space-y-2 text-[#f3f3f3] tracking-wider">
      The dataset is <b className='text-orange-500'>divided</b> into training and testing sets, with <b className='text-orange-500'>80%</b> of the images allocated for training and <b className='text-orange-500'>20%</b> for testing. The shutil and os modules were used to create a new folder and copy face_data into it. This new folder, face_data_split, contains separate train and test directories for <b className='text-orange-500'>each</b> individual.
    </span>
  ),
  "Train the CNN model": (
    <span className="mt-5 space-y-2 text-[#f3f3f3] tracking-wider">
      We used a pretrained <b className='text-orange-500'>MobileNetV2</b> model with the top layer removed to extract features from the images.
      <br />
      Then, we added our own <b className='text-orange-500'>Dense layers</b> on top to classify each face.
      <br />
      The training process involved <b className='text-orange-500'>forward propagation</b>, <b className='text-orange-500'>loss calculation</b>, <b className='text-orange-500'>backpropagation</b>, and <b className='text-orange-500'>weight updates</b> using the Adam optimizer.
      <br />
      {/* We used <b className='text-orange-500'>EarlyStopping</b> to stop training when the validation loss stopped improving, helping to avoid overfitting. */}
    </span>
  ),
  "Save, Export Test": (
    <span className="mt-5 space-y-2 text-[#f3f3f3] tracking-wider">
      Once trained, the model was saved as a <b className='text-orange-500'>.h5 file</b> using TensorFlow’s <code>model.save()</code> function.
      <br />
      The label mapping (class names) was saved separately as a <b className='text-orange-500'>.pkl file</b> using Python’s <code>pickle</code> module.
      <br />
      For testing, a new image can be loaded, resized to 224×224 pixels, and passed through the model to get predictions.
      <br />
      The model returns a confidence score and the predicted class name using the label mapping file.
    </span>
  ),

};

// Dynamically add content to args


const args = argcon.map((exp) => ({
  ...exp,
  content: contentMap[exp.title] || <p>No content available.</p>,
}));

const ArgumentCard = ({ arg }) => {
  return (<VerticalTimelineElement // create structure
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={arg.date}
    iconStyle={{ background: arg.iconBg }}
    icon={<div className='flex justify-center items-center w-full h-full'>
      <img
        src={arg.icon}
        alt={arg.company_name}
        className='w-[60%] h-[60%] object-contain'
      />
    </div>}
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>
        {arg.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {arg.subtitle}
      </p>
      <p className='mt-[5px]'>
        {arg.content}
      </p>
    </div>
  </VerticalTimelineElement>)
}
const Argument = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Procedure</h2>
        <p className={`${styles.sectionSubText} text-center`}>Steps throughout the entire process</p>

      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {
            args.map((arg, index) => (
              <ArgumentCard key={index} arg={arg} />
            ))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Argument, "step")